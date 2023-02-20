const API_STATUS_CODES = {
    SUCCESS: 200,
    NOT_FOUND: 404,
    AUTHORIZATION_FAILED: 401,
    ERROR_CODE: 400,
    INTERNAL_SERVER_ERROR: 500,
    DUPLICATE_ENTRY: 11000,
}

const RESPONSE_MESSAGES = {
    SUCCESS: 'Success',
    NOT_FOUND: 'Not Found',
    AUTHORIZATION_FAILED: 'Authorization failed',
    INTERNAL_SERVER_ERROR: 'Internal server error',
    DUPLICATE_ENTRY: 'Email already exists',
    GOAL_SET: 'Goal set successfully',
    GOAL_DELETED: 'Goal deleted successfully',
    GOAL_UPDATED: 'Goal updated successfully',
}

module.exports = {
    API_STATUS_CODES, RESPONSE_MESSAGES
}