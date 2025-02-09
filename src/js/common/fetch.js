import {
    personalDetails,
    projectsDetails,
    imageFramesMap,
    aboutComponentHtmlContent,
    navMenuComponentHtmlContent,
    logoComponentHtmlContent,
    footerComponentHtmlContent,
    contactComponentHtmlContent,
    videoFramesMap,
} from './load.js';

export const getProjectList = except => {
    try {
        let list = projectsDetails.projectsDetails;
        list = list.filter(p => p.id != except.id);
        const res = list.map(p => {
            return {
                id: p.id,
                name: p.name,
                type: p.type,
            };
        });
        return res;
    } catch (e) {
        alert('Failed to load project list');
        console.log(e);
    }
};

export const getProjectDetails = id => {
    try {
        let list = projectsDetails.projectsDetails;
        const res = list.find(p => p.id == id);
        return res;
    } catch (e) {
        alert('Failed to load project details');
        console.log(e);
    }
};

export const getLandingDetails = () => {
    try {
        const res = personalDetails.landing;
        return res;
    } catch (e) {
        alert('Failed to load landing details');
        console.log(e);
    }
};

export const getLogoDetails = () => {
    try {
        const res = personalDetails.logo;
        return res;
    } catch (e) {
        alert('Failed to load logo details');
        console.log(e);
    }
};

export const getAboutDetails = () => {
    try {
        const res = personalDetails.about;
        return res;
    } catch (e) {
        alert('Failed to load about details');
        console.log(e);
    }
};

export const getPhotographyDetails = () => {
    try {
        const res = personalDetails.photography;
        return res;
    } catch (e) {
        alert('Failed to load photography details');
        console.log(e);
    }
};

export const getFooterDetails = () => {
    try {
        const res = personalDetails.footer;
        return res;
    } catch (e) {
        alert('Failed to load footer details');
        console.log(e);
    }
};

export const getImageSrc = path => {
    try {
        return imageFramesMap.get(path);
    } catch (e) {
        alert('Failed to load image src');
        console.log(e);
    }
};

export const getVideoSrc = path => {
    try {
        return videoFramesMap.get(path);
    } catch (e) {
        alert('Failed to load video src');
        console.log(e);
    }
};

export const getAboutComponentHtmlContent = () => {
    try {
        return aboutComponentHtmlContent;
    } catch (e) {
        alert('Failed to load about component content');
        console.log(e);
    }
};

export const getNavMenuComponentHtmlContent = () => {
    try {
        return navMenuComponentHtmlContent;
    } catch (e) {
        alert('Failed to load nav menu component content');
        console.log(e);
    }
};

export const getLogoComponentHtmlContent = () => {
    try {
        return logoComponentHtmlContent;
    } catch (e) {
        alert('Failed to load logo component content');
        console.log(e);
    }
};

export const getFooterComponentHtmlContent = () => {
    try {
        return footerComponentHtmlContent;
    } catch (e) {
        alert('Failed to load footer component content');
        console.log(e);
    }
};

export const getContactComponentHtmlContent = () => {
    try {
        return contactComponentHtmlContent;
    } catch (e) {
        alert('Failed to load contact component content');
        console.log(e);
    }
};
