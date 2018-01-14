import test from 'ava';
import {helpAction} from './help-action';
import {mock, verify, instance} from 'ts-mockito';
import { Request, response } from "alexa-app/types";


test((t) => {

    t.plan(3)

    let testRequest = {};
    let testResponse = {
        say: (input) => {
            t.is(input, 'Help text.');
            return testResponse
        },
        shouldEndSession: (shouldEnd) => {
            t.false(shouldEnd);
            return testResponse;
        }
    } as response;

    t.is(helpAction(testRequest, testResponse), testResponse)
    
});