import React from "react";
import {PeopleListItem} from "./PeopleListItem";
import styled from "styled-components";



export const PeopleList = ({people}) =>(
        <>
        {people.map(person => <PeopleListItem person={person} key={person.name} />) }
            </>
             );
