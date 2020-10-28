import React, {useEffect, useState} from "react";
import {addRuleService, getRuleService, deleteRuleService} from "../API/supplierAPI";
import {displayErrorText} from "./Utils"
import DisplayRule from "./DisplayRule";
import {useStateValue} from "../provider/StateProvider";
import {actionTypes} from "../provider/Reducer";

const RuleList = () => {

    const [inputRule, setInputRule] = useState("");
    const [rules, setRules] = useState([]);
    const [errorExist, setErrorExist] = useState(false);
    const [loader, setLoader] = useState(false);
    const [state, dispatch] = useStateValue();

    useEffect(()=>{
        (async function getAllDataSource() {
            setLoader(true);
            await updateRuleList();
        })()
    },[]);

    const fetchLatestTweet = (ruleExist) => {
        if (ruleExist){
            dispatch({
                type: actionTypes.GET_TWEET,
                fetchTweet: true
            })
        } else {
            dispatch({
                type: actionTypes.GET_TWEET,
                fetchTweet: false
            })
        }

    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        setLoader(true);
        const response = await addRuleService(inputRule);
        if (!response){
            setErrorExist(true);
            setLoader(false);
        } else {
            await updateRuleList();
            fetchLatestTweet(true);
        }
    };

    const updateRuleList = async () => {
        const ruleList = await getRuleService();
        if (ruleList === 500){
            setErrorExist(true);
        }
        if (ruleList.hasOwnProperty("data")){
            setRules(ruleList.data);
            setInputRule("");
            ruleList.data.length ? fetchLatestTweet(true) : fetchLatestTweet(false);
        }
        setLoader(false);
    };

    const deleteRule = async (id) => {
        const status = await deleteRuleService(id);
        if (status === 500){
            setErrorExist(true);
        } else {
            const evictRule = rules.filter((rules) => rules.id !== id);
            setRules(evictRule);
            evictRule.length ? fetchLatestTweet(true) : fetchLatestTweet(false);
        }
    };

    const displayContent = () => {
        return loader? <h3>Please wait...</h3> : displayForm();
    };

    const displayForm = () => {
      return <>
          <h3>Create Rule</h3>
          <form className="rules-form" onSubmit={handleSubmit}>
              <input type="text" className="rules-text-input" id="rule-id"
                     value={inputRule} onChange={(e) => setInputRule(e.target.value)}
                     required={true}/>
              <button type="submit" className="rules-button">Create</button>
          </form>
      </>
    };

    return(
        <>
            {errorExist && displayErrorText()}
            {displayContent()}
            {!loader && rules && <DisplayRule rules={rules} deleteRule={deleteRule}/>}
        </>

    );

};

export default RuleList;