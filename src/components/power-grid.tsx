import * as React from "react";
import DataTable from "./data-grid";

export interface State {
    textLabel: string,
    textValue: string
}

export const initialState: State = {
    textLabel: "",
    textValue: ""
}

export class PowerGrid extends React.Component<{}, State> {
    constructor(props: any) {
        super(props);
        this.state = initialState;
    }

    private static updateCallback: (data: object) => void = null;

    public static update(newState: State) {
        if (typeof PowerGrid.updateCallback === 'function') {
            PowerGrid.updateCallback(newState);
        }
    }

    public state: State = initialState;

    public componentWillMount() {
        PowerGrid.updateCallback = (newState: State): void => { this.setState(newState); };
    }

    public componentWillUnmount() {
        PowerGrid.updateCallback = null;
    }

    render() {
        const { textLabel, textValue } = this.state;
        
        return (
            <DataTable/>
        )
    }
}