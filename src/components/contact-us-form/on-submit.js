// @flow
import { Routes } from "../../constants";

export const handleSubmit = async (values, props) => {
    // await props.props.sendEmailContactUs(values);
    await props.props.history.push(Routes.ThankYouContactUs)
}

export default handleSubmit;