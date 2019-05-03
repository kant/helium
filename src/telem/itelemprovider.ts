import { DependencyTelemetry } from "applicationinsights/out/Declarations/Contracts/TelemetryTypes/DependencyTelemetry";

export interface ITelemProvider {
    /**
     * Sends an event with the given name to App Insights
     * @param eventName Name of event to track
     */
    trackEvent(eventName: string): void;
    getDependencyTrackingObject(
        dtn: string,
        n: string,
        d: string,
        rc: string,
        s: boolean,
        dur: number): DependencyTelemetry;
    trackDependency(dependency: DependencyTelemetry);
}
