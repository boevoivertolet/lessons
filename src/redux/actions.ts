export enum ACTIONS_TYPE {
    CHANGE_CURRENCY_FIELD_TYPE = 'CurrencyExchange/CHANGE_CURRENCY_FIELD_TYPE',
    CHANGE_CHANGE_ACTION = 'CurrencyExchange/CHANGE_CHANGE_ACTION',
    CHANGE_CURRENT_CURRENCY = 'CurrencyExchange/CHANGE_CURRENT_CURRENCY',
}


export type ChangeCurrencyFieldType = {
    type: 'CurrencyExchange/CHANGE_CURRENCY_FIELD_TYPE'
    amountOfBYN: string
    amountOfCurrency: string
};


export const ChangeCurrencyFieldAC = (amountOfBYN: string, amountOfCurrency: string): ChangeCurrencyFieldType => {
    return ({type: 'CurrencyExchange/CHANGE_CURRENCY_FIELD_TYPE', amountOfBYN, amountOfCurrency} as const)
};

export type ChangeAction = {
    type: 'CurrencyExchange/CHANGE_CHANGE_ACTION'
    isBuying: boolean

};


export const ChangeActionAC = (isBuying: boolean): ChangeAction => {
    return ({type: 'CurrencyExchange/CHANGE_CHANGE_ACTION', isBuying} as const)
};

export type ChangeCurrentCurrencyType = {
    type: 'CurrencyExchange/CHANGE_CURRENT_CURRENCY'
    currentCurrency: string
};


export const СhangeCurrentCurrencyAC = (currentCurrency: string): ChangeCurrentCurrencyType => {
    return ({type: 'CurrencyExchange/CHANGE_CURRENT_CURRENCY', currentCurrency} as const)

};

export type CurrencyReducersTypes = ChangeCurrencyFieldType | ChangeAction | ChangeCurrentCurrencyType;