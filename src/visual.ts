"use strict";
import powerbi from "powerbi-visuals-api";

import DataView = powerbi.DataView;
import VisualConstructorOptions = powerbi.extensibility.visual.VisualConstructorOptions;
import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
import IVisual = powerbi.extensibility.visual.IVisual;
import * as React from "react";
import {createRoot} from "react-dom/client";
import { ReactCircleCard, initialState } from "./components/fluent-table";
import DataTable from "./components/data-grid";

import "./../style/visual.less";

export class Visual implements IVisual {
    private target: HTMLElement;
    private reactRoot: React.ComponentElement<any, any>;

    constructor(options: VisualConstructorOptions) {
        this.target = options.element;
        this.reactRoot = React.createElement(ReactCircleCard, {});

        const root = createRoot(this.target);
        root.render(this.reactRoot);
    }

    public update(options: VisualUpdateOptions) {
        // if(options.dataViews && options.dataViews[0]){
        //     const dataView: DataView = options.dataViews[0];
        
        //     ReactCircleCard.update({
        //         textLabel: dataView.metadata.columns[0].displayName,
        //         textValue: dataView.single.value.toString()
        //     });
        // } else {
        //     this.clear();
        // }
    }

    private clear() {
        // ReactCircleCard.update(initialState);
    }
}