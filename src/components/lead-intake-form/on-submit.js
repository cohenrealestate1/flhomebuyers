// @flow
import { Routes } from "../../constants";

export const handleSubmit = async (values, props) => {
    // await props.props.sendEmailLead(values);
    await props.props.history.push(Routes.ThankYouLeadIntakeForm)
}

export default handleSubmit;