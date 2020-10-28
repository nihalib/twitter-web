import React from "react";

const Rule = ({rule, onRuleDelete}) => {
    return (
        <div className="rules-display">
            <li key={rule.id}>
                {rule.value}
            </li>
            <button
                className="rules-button"
                onClick={() => onRuleDelete(rule.id)}>
                Delete
            </button>
        </div>
    )
};

export default Rule;