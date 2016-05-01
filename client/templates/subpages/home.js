Template.home.helpers({
	timeUnits:TimeUnits.find(),

	newsAdminOK: function() {
		usuarioActual = Meteor.user().username;
		if (usuarioActual == 'admin') {
			return true;
		} else {
			return false;
		}
	}

});
