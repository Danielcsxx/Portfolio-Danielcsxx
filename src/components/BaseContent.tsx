import React from "react";
import { BaseSection, ContentMain } from "../styles/BaseContent";

interface BaseContentProps {
    id: string;
    children: React.ReactNode;
}

const BaseContent: React.FC<BaseContentProps> = ({ id, children }) => {
    return (
        <BaseSection id={id}>
            <ContentMain>
                {children}
            </ContentMain>
        </BaseSection>
    )
}

export default BaseContent;