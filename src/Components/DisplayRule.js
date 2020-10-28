import React from "react";
import Rule from "./Rule";
import {sampleRule} from "./Utils";

const DisplayRule = ({rules, deleteRule}) => {
    return Array.isArray(rules) && rules.length? displayRule({rules, deleteRule}) : sampleRule();
};

const displayRule = ({rules, deleteRule}) => {
    return <>
        <h3>Rules added</h3>
        <ul>
            {buildRuleList({rules, deleteRule})}
        </ul>
    </>
};

const buildRuleList = ({rules, deleteRule}) => {
    if (rules.length > 0) {
        return rules.map((rule) => (
            <Rule key={rule.id} rule={rule} onRuleDelete={(id) => deleteRule(id)}/>
        ));
    }
};

export default DisplayRule;