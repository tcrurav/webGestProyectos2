Template.list_timeUnits.helpers({
	timeUnits:TimeUnits.find(),

	adminOK: function() {
		usuarioActual = Meteor.user().username;
		if (usuarioActual == 'admin') {
			return true;
		} else {
			return false;
		}
	}

});
