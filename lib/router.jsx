import React from 'react';
import {mount} from 'react-mounter';

import {layout} from './layout.jsx';
import HomepageContainer from '../imports/components/HomepageContainer.jsx';
import Login from '../imports/components/Login.jsx';
import Add from '../imports/components/Add.jsx';
import EditContainer from '../imports/components/EditContainer.jsx';

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
