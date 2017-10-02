"use strict";

import {TOGGLE_STATE, SET_ENABLED, SET_DISABLED} from "../actions/toggle";

function changeState(state = "enabled", action){
    switch(action){
    case TOGGLE_STATE:
        return (state == "enabled" ? "disabled" : "enabled");
    case SET_ENABLED:
        return "enabled";
    case SET_DISABLED:
        return "disabled";
    default :
        return state;
    }
}

export {changeState};
