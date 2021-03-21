import * as React from "react";
import { List, Datagrid, TextField, EmailField } from 'react-admin';

// @ts-ignore
export const UserList = props => (
    <List {...props}>
    <Datagrid rowClick="edit">
    <TextField source="id" />
    <TextField source="name" />
    <TextField source="login" />
    <EmailField source="role" />
        </Datagrid>
        </List>
);
