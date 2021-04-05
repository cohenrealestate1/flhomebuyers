// @flow
import React from "react";
import { FooterIconContainer } from "./styled-components";
import useHoverIcon from "./use-hover-icon";

export const LinkedIn = (props: Props) => {
    const hoverProps = useHoverIcon();
    return <FooterIconContainer viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg" {...hoverProps}>
    <path d="M17.0002 0.679688C7.98678 0.679688 0.680176 7.98629 0.680176 16.9997C0.680176 26.0131 7.98678 33.3197 17.0002 33.3197C26.0136 33.3197 33.3202 26.0131 33.3202 16.9997C33.3202 7.98629 26.0136 0.679688 17.0002 0.679688ZM13.0052 23.764H9.70038V13.1288H13.0052V23.764ZM11.3324 11.8232C10.2886 11.8232 9.61368 11.0837 9.61368 10.1691C9.61368 9.23579 10.309 8.51839 11.3749 8.51839C12.4408 8.51839 13.0936 9.23579 13.114 10.1691C13.114 11.0837 12.4408 11.8232 11.3324 11.8232ZM25.0752 23.764H21.7704V17.8701C21.7704 16.4982 21.291 15.5666 20.0959 15.5666C19.183 15.5666 18.6407 16.1973 18.401 16.8042C18.3126 17.0201 18.2905 17.3261 18.2905 17.6304V23.7623H14.984V16.5203C14.984 15.1926 14.9415 14.0825 14.8973 13.1271H17.7686L17.9199 14.6044H17.9862C18.4214 13.9108 19.4873 12.8874 21.2706 12.8874C23.4449 12.8874 25.0752 14.3443 25.0752 17.4757V23.764Z" fill="white"/>
    </FooterIconContainer>
}

export default LinkedIn;