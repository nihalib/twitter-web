import {TWITTER_STREAM_RULES} from "../Components/Utils";

export const addRuleService = async (rule) => {
    const payload = { add: [{ value: rule}] };
    return await createRules(JSON.stringify(payload));
};

const createRules = async (request) => {
    return await fetch(TWITTER_STREAM_RULES,
        {
        "method": "POST",
        "headers": {
            "content-type": "application/json",
            "accept": "application/json"
        },
        "body": request
        })
        .then(response => {
            return !!(response.status === 201 || 200);
        })
        .catch(err => {
            return false;
        });
};

export const getRuleService = async () => {
    let payload="";
    const status = await fetch(TWITTER_STREAM_RULES, {"method": "GET"})
        .then(response => {
            let status = response.status;
            payload = response;
            return status;
        })
        .catch(reason => {
            return 500;
        });
    const result = ((status !== 500) && payload)? await payload.json() : status;
    return result;
};

export const deleteRuleService = async (id) => {
    const status = await fetch(TWITTER_STREAM_RULES+`/`+id, {"method": "DELETE"})
        .then(response => {
            return response.status;
        })
        .catch(reason => {
            return 500;
        });
    return status;
};