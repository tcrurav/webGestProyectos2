Router.configure({
	layoutTemplate: 'layout',
});

Router.route('/',{name:'home'});
Router.route('/izquierda',{name:'paginaIzquierda'});
Router.route('/centro',{name:'paginaCentro'});
Router.route('/derecha',{name:'paginaDerecha'});
