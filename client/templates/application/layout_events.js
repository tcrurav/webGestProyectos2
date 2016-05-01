Template.layout.events({
	/*		FIRST NEWS EVENTS, THEN TIMEUNITS EVENTS */

	/*		Here are the news events: */

	'submit #addNews': function(e) {
		if (e.target.title.value != "" || e.target.link.value != "" || e.target.description.value != "") {
			$("#addNews_form_error").hide();
			News.insert({
				title: e.target.title.value,
				link: e.target.link.value,
				description: e.target.description.value
			});

		}else {
			$("#addNews_form_error").show();
		}
		return false;
	},



	'submit #editNews': function(e) {
		if (e.target.title.value != '' || e.target.link.value != '' || e.target.description.value != '') {
			$("#editNews_form_error").hide();
			News.update( this._id, { $set: {
				title: e.target.title.value,
				link: e.target.link.value,
				description: e.target.description.value
			}
			});

		}	else if (e.target.title.value == '' || e.target.link.value == '' || e.target.description.value == '') {
			$("#editNews_form_error").show();
		}
		return false;
	},

	'click #newsDelete': function() {
			News.remove(this._id);
	},

	/*		End of the news events: */




		/*		And here are the timeUnits events: */

	'submit #newTimeUnit': function(e) {
		if (e.target.minutes.value > 0) {
	/*		document.getElementById('form_error').className="hidden"; */
			$("#form_error").hide();
  		TimeUnits.insert({
			activity: e.target.activity.value,
			minutes: e.target.minutes.value,
			priority: e.target.priority.value,
			owner: Meteor.userId(),
			user: Meteor.user().username
			});

		}else {
			$("#form_error").show();
		}
		return false;
	},

	'click #editValues': function() {

			document.getElementById('timeUnitsView').className="hidden";
			document.getElementById('timeUnitsEdit').className="visible";

	},


	'submit #modifyTimeUnit': function(e) {
		if (e.target.minutes.value > 0) {
			$("#edit_form_error").hide();
			TimeUnits.update( this._id, { $set: {
			activity: e.target.activity.value,
			minutes: e.target.minutes.value,
			priority: e.target.priority.value,
			owner: Meteor.userId(),
			user: Meteor.user().username
			}
			});
			document.getElementById('timeUnitsView').className="visible";
			document.getElementById('timeUnitsEdit').className="hidden";

		}else {
			$("#edit_form_error").show();
		}
		return false;
	},


	'click #delete': function() {
		if (this.owner == Meteor.userId()){
			TimeUnits.remove(this._id);
		} else {
			alert("You don't own this info");
		}
	}

		/*		End of the timeUnits events */

});
