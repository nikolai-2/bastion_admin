import React from 'react';

import {Admin, ListGuesser, Resource} from "react-admin";
import jsonServerProvider from 'ra-data-json-server';
import {UserList} from "./user-getall";

const dataProvider = jsonServerProvider('http://localhost:3000');
const App = () => (
        <Admin dataProvider={dataProvider}>
            <Resource name="user/getAll" list={UserList} />
        </Admin>
);

export default App;
