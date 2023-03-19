import React from 'react';
import WelcomePageHeader from "../welcomePageHeader/WelcomePageHeader";
import WelcomePageFooter from "../welcomePageFooter/WelcomePageFooter";
import WelcomePageMain from "../welcomePageMain/WelcomePageMain";

const WelcomePage = () => {
    return (
        <div>
            <WelcomePageHeader/>
            <WelcomePageMain/>
            <WelcomePageFooter/>
        </div>
    );
};

export default WelcomePage;