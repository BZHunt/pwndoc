export default {
    generalSettings: 'General Settings',
    changeDisplayLanguage: 'Display Language',
    changeDisplayLanguageInfo: 'Choose your preferred default language',
    nav: {
        audits: 'Audits',
        vulnerabilities: 'Vulnerabilities',
        data: 'Data',
    },
    btn: {
        cancel: 'Cancel',
        confirm: 'Confirm',
        create: 'Create',
        topButtonSection: {
            submitReview: 'Submit Review',
            cancelReview: 'Cancel Review',
            approve: 'Approve',
            removeApproval: 'Remove Approval',
        },
        backupFinding: "Propose Creation / Update in Vulnerability Database",
        delete: 'Delete',
        save: 'Save',
        update: 'Update',
        deleteAll: 'Delete All',
        enable: 'Enable',
        valid: 'Valid',
        new: 'New',
        updates: 'Updates',
    },
    tooltip: {
        usersConnected: 'Users on the Audit:',
        editAudit: 'Edit Audit',
        downloadReport: 'Download Report',
        deleteAudit: 'Delete Audit',
        topButtonSection: {
            submitReview: 'Mark audit as ready for review',
            cancelReview: 'Make changes to the audit',
            approve: 'Approve this audit',
            removeApproval: 'Remove audit approval',
        },
        sortOptions: 'Sort Options',
        addToFindings: 'Add to Findings',
        edit: 'Edit',
        view: 'View',
        findAudits: 'Find Audits',
        delete: 'Delete',
        download: 'Download',
    },
    msg: {
        auditReviewUpdateOk: 'Audit review status updated successfully',
        auditApprovalUpdateOk: 'Audit approval updated successfully',
        auditUpdateOk: 'Audit updated successfully',
        findingCreateOk: 'Finding created successfully',
        findingUpdateOk: 'Finding updated successfully',
        findingDeleteOk: 'Finding deleted successfully',
        doYouWantToLeave: 'Do you really want to leave ?',
        thereAreUnsavedChanges: 'There are unsaved changes !',
        fieldRequired: 'Please fill all required Fields',
        deleteFindingConfirm: 'Delete current Finding ?',
        deleteFindingNotice: 'This action can\'t be cancelled',
        selectHost: 'Select Host',
        importHostsFirst: 'Import Hosts first',
        auditTypeNotSet: 'Audit Type not set',
        sectionUpdateOk: 'Section updated successfully',
        lastnameRequired: 'Lastname required',
        firstnameRequired: 'Firstname required',
        emailRequired: 'Email required',
        clientCreatedOk: 'Client created successfully',
        clientUpdatedOk: 'Client updated successfully',
        clientDeletedOk: 'Client deleted successfully',
        deleteNotice: 'will be permanently deleted',
        confirmSuppression: 'Confirm Suppression',
        usernameRequired: 'Username required',
        passwordRequired: 'Password required',
        currentPasswordRequired: 'Current Password required',
        confirmPasswordDifferents: 'New Password and Confirm Password are differents',
        collaboratorCreatedOk: 'Collaborator created successfully',
        collaboratorUpdatedOk: 'Collaborator updated successfully',
        collaboratorDeletedOk: 'Collaborator deleted successfully',
        nameRequired: 'Name required',
        fileRequired: 'File required',
        companyCreatedOk: 'Company created successfully',
        companyUpdatedOk: 'Company updated successfully',
        companyDeletedOk: 'Company deleted successfully',
        templateNotFound: 'Template Not Found',
        templateCreatedOk: 'Template created successfully',
        templateUpdatedOk: 'Template updated successfully',
        allVulnerabilitesDeleteNotice: 'All Vulnerabilities will be permanently deleted',
        allVulnerabilitesDeleteOk: 'All vulnerabilities deleted successfully',
        profileUpdateOk: 'Profile updated successfully',
        settingsUpdatedOk: 'Settings updated successfully',
        revertingSettings: 'Reverting settings !',
        revertingSettingsConfirm: 'Do you really wish to revert the settings to the defaults? You will lose all current settings.',
        importingSettings: 'Importing settings !',
        importingSettingsConfirm: 'Do you really wish to import the new settings? You will lose all current settings that are replaced.',
        settingsImportedOk: 'Settings imported successfully',
        vulnerabilityCreatedOk: 'Vulnerability created successfully',
        vulnerabilityUpdatedOk: 'Vulnerability updated successfully',
        vulnerabilityDeletedOk: 'Vulnerability deleted successfully',
        vulnerabilityWillBeDeleted: 'Vulnerability will be permanently deleted',
        confirmCategoryChange: 'Confirm Category change',
        categoryChangingNotice: 'Custom Fields display could be impacted when changing Category',
        vulnerabilityMergeOk: 'Vulnerability merge successfully',
        tryingToContactBackend: '<p>Trying to contact backend</p>',
        wrongContactingBackend: 'Something went wrong contacting backend',
    },
    err: {
        notDefinedLanguage: 'Not defined for this language',
        invalidYamlFormat: 'Invalid YAML format detected',
        parsingError1: 'Parsing Error: {0}',
        parsingError2: 'Parsing Error: line {0}, column: {1}',
        invalidJsonFormat: 'Invalid JSON format detected',
        jsonMustBeAnObject: 'JSON must be an object.',
        importingSettingsError: 'Error importing settings',
        errorWhileParsingJsonContent: 'Error while parsing JSON content: {0}',
        titleRequired: 'Title required',
        expiredToken: 'Expired token',
        invalidToken: 'Invalid token',
        invalidCredentials: 'Invalid credentials',
    },
    cvss: {
        title: 'CVSSv3 Base Score',
        infoWhenNoScore: 'Select values for all base metrics to generate score',
        attackVector: 'Attack Vector',
        attackComplexity: 'Attack Complexity',
        privilegesRequired: 'Privileges Required',
        userInteraction: 'User Interaction',
        scope: 'Scope',
        confidentialityImpact: 'Confidentiality Impact',
        integrityImpact: 'Integrity Impact',
        availabilityImpact: 'Availability Impact',
        network: 'Network',
        adjacentNetwork: 'Adjacent Network',
        local: 'Local',
        physical: 'Physical',
        low: 'Low',
        high: 'High',
        none: 'None',
        required: 'Required',
        unchanged: 'Unchanged',
        changed: 'Changed',
    },
    registerFirstUser: 'Register First User',
    customData: 'Custom Data',
    custom: 'Custom',
    settings: 'Settings',
    profile: 'Profile',
    logout: 'Logout',
    login: 'Login',
    username: 'Username',
    password: 'Password',
    noLanguage: 'No languages are defined.  Please create Languages in ',
    noAudit: 'No Audit Types are defined.  Please create Audit Types in ',
    auditTypes: 'Audit Types',
    searchFinds: 'Search Finding',
    myAudits: 'My Audits',
    usersConnected: 'Users Connected',
    awaitingMyReview: 'Awaiting my review',
    newAudit: 'New Audit',
    search: 'Search',
    users: 'Users',
    auditNum1: 'Audit',
    auditNums: 'Audits',
    resultsPerPage: 'Results per page:',
    createAudit: 'Create Audit',
    name: 'Name',
    selectAssessment: 'Select Assessment',
    selectLanguage: 'Select Language',
    participants: 'Participants',
    language: 'Language',
    company: 'Company',
    companies: 'Companies',
    date: 'Date',
    sections: 'Sections',
    generalInformation: 'General Information',
    networkScan: 'Network Scan',
    findings: 'Findings',
    automaticSorting: 'Automatic Sorting',
    sortBy: 'Sort By',
    sortOrder: 'Sort Order',
    ascending: 'Ascending',
    descending: 'Descending',
    me: 'me',
    cvssScore: 'CVSS Score',
    priority: 'Priority',
    remediation: 'Remediation',
    remediationDifficulty: 'Remediation Difficulty',
    remediationComplexity: 'Remediation Complexity',
    remediationPriority: 'Remediation Priority',
    easy: 'Easy',
    medium: 'Medium',
    complex: 'Complex',
    low: 'Low',
    high: 'High',
    urgent: 'Urgent',
    title: 'Title',
    category: 'Category',
    selectCategory: 'Select category',
    noCategory: 'No Category',
    vulnType: 'Type',
    undefined: 'Undefined',
    vulnerabilityNum1: 'Vulnerability',
    vulnerabilitiesNums: 'Vulnerabilities',
    definition: 'Definition',
    proofs: 'Proofs',
    details: 'Details',
    completed: 'Completed',
    type: 'Type',
    description: 'Description',
    observation: 'Observation',
    references: 'References (One per line)',
    customFields: 'Custom Fields',
    affectedAssets: 'Affected Assets',
    courseOfActions: 'Course of actions',
    template: 'Template',
    client: 'Client',
    reviewers: 'Reviewers',
    collaborator: 'Collaborator',
    collaborators: 'Collaborators',
    startDate: 'Start Date',
    endDate: 'End Date',
    reportingDate: 'Reporting Date',
    auditScope: 'Scope (One per line)',
    import: 'Import',
    export: 'Export',
    hostsAssociateScopes: 'Associate imported hosts with Scopes',
    handleCustomData: 'Handle Custom Data',
    companies: 'Companies',
    clients: 'Clients',
    templates: 'Templates',
    addClient: 'Add Client',
    editClient: 'Edit Client',
    firstname: 'Firstname',
    lastname: 'Lastname',
    email: 'Email',
    function: 'Function',
    phone: 'Phone',
    cell: 'Cell',
    role: 'Role',
    collatorator: 'Collatorator',
    addCollaborator: 'Add Collaborator',
    editCollaborator: 'Edit Collaborator',
    addCompany: 'Add Company',
    editCompany: 'Edit Company',
    logo: 'Logo',
    quantifier: '',
    languages: 'Languages',
    extension: 'Extension',
    createTemplate: 'Create Template',
    file: 'File',
    editTemplate: 'Edit Template',
    importVulnerabilities: 'Import Vulnerabilities',
    importVulnerabilitiesInfo: `Import Vulnerabilities from a .yml or .json file. (Serpico format accepted)<br />
    This allows you to easily import a batch of vulnerabilities templates.`,
    importVulnerabilitiesOk: 'All <strong>{0}</strong> vulnerabilities created',
    importVulnerabilitiesAllExists: 'All <strong>{0}</strong> vulnerabilities title already exist',
    importVulnerabilitiesPartial: '<strong>{0}</strong> vulnerabilities created<br /><strong>{1}</strong> vulnerabilities title already exist',
    exportVulnerabilities: 'Export Vulnerabilities',
    exportVulnerabilitiesInfo: `Export Vulnerabilities to yaml format. This export can easily be re-imported afterward`,
    deleteAllVulnerabilities: 'Delete All Vulnerabilities',
    deleteAllVulnerabilitiesInfo: `Delete all existing vulnerabilities.<br />
    <strong>This action is definitive!!</strong>`,
    customSections: 'Custom Sections',
    listOfLanguages: 'List of Languages',
    editLanguages: 'Edit Languages',
    locale: 'Locale',
    auditTypesUsedInAudits: 'Audit types used in Audits',
    languageUsedInAuditsAndVuls: 'Languages used in Audits and Vulnerabilities',
    addSections: 'Add Sections',
    hideBuiltInSections: 'Hide Built-in Sections',
    listOfAuditTypes: 'List of Audit Types',
    editAuditTypes: 'Edit Audit Types',
    createAtLeastOneLanguage: 'Please create at least one Language',
    createVulnerabilityTypes: 'Create Vulnerability types used in Vulnerabilities and Findings',
    vulnerabilityTypesList: 'List of Vulnerability Types',
    editVulnerabilityTypes: 'Edit Vulnerability Types',
    createVulnerabilityCategories: 'Create Vulnerability categories used in Vulnerabilities and Findings',
    defaultSortingOptions: 'Default Sorting Options',
    listOfCategories: 'List of Categories',
    editCategories: 'Edit Categories',
    createAndManageCustomFields: 'Create and manage Custom Fields for different Views',
    selectView: 'Select View',
    selectSection: 'Select Section',
    selectComponent: 'Select Component',
    label: 'Label',
    size: 'Size',
    offset: 'Offset',
    required: 'Required',
    optionsLanguage: 'Options Language',
    addOption: 'Add Option',
    languageForDefaultText: 'Language (For default text)',
    createCustomSections: 'Create Custom Sections used in Audits',
    fieldForTemplate: 'Field (For Template)',
    customIcon: 'Icon (Material/Font Awesome)',
    field: 'Field',
    editSections: 'Edit Sections',
    vulnerabilityTypes: 'Vulnerability Types',
    vulnerabilityCategories: 'Vulnerability Categories',
    auditGeneral: 'Audit General',
    auditFinding: 'Audit Finding',
    auditSection: 'Audit Section',
    vulnerability: 'Vulnerability',
    checkbox: 'Checkbox',
    date: 'Date',
    editor: 'Editor',
    input: 'Input',
    radio: 'Radio',
    select: 'Select',
    selectMultiple: 'Select Multiple',
    space: 'Space',
    updateUserInformation: 'Update User Information',
    newPassword: 'New Password',
    confirmPassword: 'Confirm Password',
    currentPassword: 'Current Password *',
    reports: 'Reports',
    reportsImagesBorder: 'Report Images border',
    addBorderToImages: 'Add border to images in the generated report.',
    currentColor: 'Current color',
    cvssColors: 'CVSS colors',
    changeCvssColorsDescription: 'Changes the colors used in the report to represent the different CVSS severities.',
    critical: 'Critical',
    informational: 'Informational',
    reviews: 'Reviews',
    auditUpdateAfterApproval: 'Audit Update After Approval',
    changeApproveBehaviorIfAuditUpdated: 'Changes the behavior for an approved audit that gets updated. If an audit is updated : ',
    removeAllPriorApprovals: 'All its prior approvals are removed.',
    keepAllPriorApprovals: 'All its prior approvals are kept.',
    mandatoryReview: 'Mandatory Review',
    mandatoryReviewInfo: `Makes the review process mandatory. When activated, a user cannot export an audit unless it has been approved by the specified number of reviewers. 
    <br/>The minimal number of reviewers is also used to determine if a report is marked as approved.`,
    minimalNumberOfReviewers: 'Minimal number of reviewers',
    saveSettings: 'Save settings',
    revertSettingsToDefaults: 'Revert settings to defaults',
    importSettings: 'Import settings',
    exportSettings: 'Export settings',
    mergeVulnerabilities: 'Merge Vulnerabilities',
    mergeVulnerabilitiesInfo: `The goal is to merge different vulnerabilities with different languages into the same vulnerabiliy.<br />
    So a minimum of 2 Languages must exist.`,
    newVulnerability: 'New Vulnerability',
    total: 'Total',
    addVulnerability: 'Add Vulnerability',
    editVulnerability: 'Edit Vulnerability',
    changeCategory: 'Change Category',
    listOfSections: 'List of Sections',
    updateVulnerability: 'Update Vulnerability',
    current: 'Current',
    languageAddFromRight: 'Language (Add from right)',
    languageMoveToLeft: 'Language (Move to left)',
    merge: 'Merge',
    goBack: 'Go back',
  }