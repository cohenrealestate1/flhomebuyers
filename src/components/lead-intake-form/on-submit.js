// @flow
import { Routes } from "../../constants";

export const handleSubmit = async (values, props) => {
    // await props.props.sendEmailLead(values);
    await props.props.history.push(Routes.ThankYou)
}

export default handleSubmit;