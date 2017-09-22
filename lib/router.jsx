import React from 'react';
import {mount} from 'react-mounter';

import {layout} from './layout.jsx';
import HomepageContainer from '../imports/components/HomepageContainer.jsx';
import Login from '../imports/components/Login.jsx';
import Add from '../imports/components/Add.jsx';
import EditContainer from '../imports/components/EditContainer.jsx';

/*
	If user has logged in, they have an unique id and we can access it via Meteor.userId().If they have and it matches with Accounts database,
	users can access everywhere but if not they are redirected automatically to the Login route.We must check it in every restricted route.
	Also if they are logged in if they try to access Login route they are redirected automatically to the Homepage.
*/

FlowRouter.route('/', {
	name: 'home',

	action: function() {
		if (Meteor.userId()) {
			mount (layout, {
				content: <HomepageContainer />
			})
		} else {
			FlowRouter.redirect('/login');
		}
	}
});

FlowRouter.route('/login', {
	name: 'login',

	action: function() {
		if (Meteor.userId()) {
			FlowRouter.redirect('/');
		} else {
			mount (layout, {
				content: <Login />
			})
		}
	}
});

FlowRouter.route('/add', {
	name: 'add',

	action: function() {
		if (Meteor.userId()) {
			mount (layout, {
				content: <Add />
			})
		} else {
			FlowRouter.redirect('/login');
		}
	}
});

//This route adds one parameter and it is vehicle's unique id.This parameter can only be accessed from EditContainer component.
FlowRouter.route('/vehicleEdit/:id', {
	name: 'edit',

	action: function(params) {
		if (Meteor.userId()) {
			mount (layout, {
				content: <EditContainer id={params.id} />
			})
		} else {
			FlowRouter.redirect('/login');
		}
	}
});
