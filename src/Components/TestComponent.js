import React from "react";
import {useEffect, useState} from 'react'
import axios from 'axios';
import { trackPromise, usePromiseTracker } from 'react-promise-tracker';
import ShowUserData from "./showData/ShowUserData";

const area = 'persons';
const url = 'http://localhost:3001/api/passenger';

function TestComponent() {
    const { promiseInProgress } = usePromiseTracker({ area });
    const [ persons, setPersons ] = useState(null);


    useEffect(() => {
        trackPromise(axios.get(url), area).then(({ data }) => {
            setPersons(data);
        });
    }, [persons]);

        return (
            <div>
                {promiseInProgress
                    ? <div>Подождите, данные загружаются!</div>
                    : <ShowUserData data={persons} /> }
            </div>
        );
}

export default TestComponent;