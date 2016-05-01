if (TimeUnits.find().count() == 0) {

	TimeUnits.insert({
		activity: 'Preparando la web',
		minutes: '15',
		priority: 'high'
	});
	TimeUnits.insert({
		activity: 'Sigo preparando',
		minutes: '20',
		priority: 'low'
	});

}

if(News.find().count() == 0){

  News.insert({
    title: 'Teacher finds the way to keep students focused',
    link: 'http://lareperanews.com/art=23',
    description: 'Tiburcio Cruz, prominent teacher at the IES, seems to have found the perfect solution to keep students focused on the class development: hiring streap-tease showgirls.'
  });
  News.insert({
    title: 'There can be only one left',
    link: 'http://lareperanews.com/art=24',
    description: 'New strategies to stimulate students to hardworking: the IES has announced the new school policy, only one student per class will get the diploma, all the rest will be rejected.'
  });

}

if (Meteor.users.find({username: 'admin'}).count()==0){

	Accounts.createUser({
		username: 'admin',
		password: 'umlalpoder'
	});

}
