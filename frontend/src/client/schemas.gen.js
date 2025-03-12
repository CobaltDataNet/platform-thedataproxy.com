// This file is auto-generated by @hey-api/openapi-ts
export const Body_login_login_access_tokenSchema = {
    properties: {
        grant_type: {
            anyOf: [
                {
                    type: "string",
                    pattern: "password",
                },
                {
                    type: "null",
                },
            ],
            title: "Grant Type",
        },
        username: {
            type: "string",
            title: "Username",
        },
        password: {
            type: "string",
            title: "Password",
        },
        scope: {
            type: "string",
            title: "Scope",
            default: "",
        },
        client_id: {
            anyOf: [
                {
                    type: "string",
                },
                {
                    type: "null",
                },
            ],
            title: "Client Id",
        },
        client_secret: {
            anyOf: [
                {
                    type: "string",
                },
                {
                    type: "null",
                },
            ],
            title: "Client Secret",
        },
    },
    type: "object",
    required: ["username", "password"],
    title: "Body_login-login_access_token",
};
export const HTTPValidationErrorSchema = {
    properties: {
        detail: {
            items: {
                $ref: "#/components/schemas/ValidationError",
            },
            type: "array",
            title: "Detail",
        },
    },
    type: "object",
    title: "HTTPValidationError",
};
export const ItemCreateSchema = {
    properties: {
        title: {
            type: "string",
            maxLength: 255,
            minLength: 1,
            title: "Title",
        },
        description: {
            anyOf: [
                {
                    type: "string",
                    maxLength: 255,
                },
                {
                    type: "null",
                },
            ],
            title: "Description",
        },
    },
    type: "object",
    required: ["title"],
    title: "ItemCreate",
};
export const ItemPublicSchema = {
    properties: {
        title: {
            type: "string",
            maxLength: 255,
            minLength: 1,
            title: "Title",
        },
        description: {
            anyOf: [
                {
                    type: "string",
                    maxLength: 255,
                },
                {
                    type: "null",
                },
            ],
            title: "Description",
        },
        id: {
            type: "string",
            format: "uuid",
            title: "Id",
        },
        owner_id: {
            type: "string",
            format: "uuid",
            title: "Owner Id",
        },
    },
    type: "object",
    required: ["title", "id", "owner_id"],
    title: "ItemPublic",
};
export const ItemUpdateSchema = {
    properties: {
        title: {
            anyOf: [
                {
                    type: "string",
                    maxLength: 255,
                    minLength: 1,
                },
                {
                    type: "null",
                },
            ],
            title: "Title",
        },
        description: {
            anyOf: [
                {
                    type: "string",
                    maxLength: 255,
                },
                {
                    type: "null",
                },
            ],
            title: "Description",
        },
    },
    type: "object",
    title: "ItemUpdate",
};
export const ItemsPublicSchema = {
    properties: {
        data: {
            items: {
                $ref: "#/components/schemas/ItemPublic",
            },
            type: "array",
            title: "Data",
        },
        count: {
            type: "integer",
            title: "Count",
        },
    },
    type: "object",
    required: ["data", "count"],
    title: "ItemsPublic",
};
export const MessageSchema = {
    properties: {
        message: {
            type: "string",
            title: "Message",
        },
    },
    type: "object",
    required: ["message"],
    title: "Message",
};
export const NewPasswordSchema = {
    properties: {
        token: {
            type: "string",
            title: "Token",
        },
        new_password: {
            type: "string",
            maxLength: 40,
            minLength: 8,
            title: "New Password",
        },
    },
    type: "object",
    required: ["token", "new_password"],
    title: "NewPassword",
};
export const TokenSchema = {
    properties: {
        access_token: {
            type: "string",
            title: "Access Token",
        },
        token_type: {
            type: "string",
            title: "Token Type",
            default: "bearer",
        },
    },
    type: "object",
    required: ["access_token"],
    title: "Token",
};
export const UpdatePasswordSchema = {
    properties: {
        current_password: {
            type: "string",
            maxLength: 40,
            minLength: 8,
            title: "Current Password",
        },
        new_password: {
            type: "string",
            maxLength: 40,
            minLength: 8,
            title: "New Password",
        },
    },
    type: "object",
    required: ["current_password", "new_password"],
    title: "UpdatePassword",
};
export const UserCreateSchema = {
    properties: {
        email: {
            type: "string",
            maxLength: 255,
            format: "email",
            title: "Email",
        },
        is_active: {
            type: "boolean",
            title: "Is Active",
            default: true,
        },
        is_superuser: {
            type: "boolean",
            title: "Is Superuser",
            default: false,
        },
        full_name: {
            anyOf: [
                {
                    type: "string",
                    maxLength: 255,
                },
                {
                    type: "null",
                },
            ],
            title: "Full Name",
        },
        password: {
            type: "string",
            maxLength: 40,
            minLength: 8,
            title: "Password",
        },
    },
    type: "object",
    required: ["email", "password"],
    title: "UserCreate",
};
export const UserPublicSchema = {
    properties: {
        email: {
            type: "string",
            maxLength: 255,
            format: "email",
            title: "Email",
        },
        is_active: {
            type: "boolean",
            title: "Is Active",
            default: true,
        },
        is_superuser: {
            type: "boolean",
            title: "Is Superuser",
            default: false,
        },
        full_name: {
            anyOf: [
                {
                    type: "string",
                    maxLength: 255,
                },
                {
                    type: "null",
                },
            ],
            title: "Full Name",
        },
        id: {
            type: "string",
            format: "uuid",
            title: "Id",
        },
    },
    type: "object",
    required: ["email", "id"],
    title: "UserPublic",
};
export const UserRegisterSchema = {
    properties: {
        email: {
            type: "string",
            maxLength: 255,
            format: "email",
            title: "Email",
        },
        password: {
            type: "string",
            maxLength: 40,
            minLength: 8,
            title: "Password",
        },
        full_name: {
            anyOf: [
                {
                    type: "string",
                    maxLength: 255,
                },
                {
                    type: "null",
                },
            ],
            title: "Full Name",
        },
    },
    type: "object",
    required: ["email", "password"],
    title: "UserRegister",
};
export const UserUpdateSchema = {
    properties: {
        email: {
            anyOf: [
                {
                    type: "string",
                    maxLength: 255,
                    format: "email",
                },
                {
                    type: "null",
                },
            ],
            title: "Email",
        },
        is_active: {
            type: "boolean",
            title: "Is Active",
            default: true,
        },
        is_superuser: {
            type: "boolean",
            title: "Is Superuser",
            default: false,
        },
        full_name: {
            anyOf: [
                {
                    type: "string",
                    maxLength: 255,
                },
                {
                    type: "null",
                },
            ],
            title: "Full Name",
        },
        password: {
            anyOf: [
                {
                    type: "string",
                    maxLength: 40,
                    minLength: 8,
                },
                {
                    type: "null",
                },
            ],
            title: "Password",
        },
    },
    type: "object",
    title: "UserUpdate",
};
export const UserUpdateMeSchema = {
    properties: {
        full_name: {
            anyOf: [
                {
                    type: "string",
                    maxLength: 255,
                },
                {
                    type: "null",
                },
            ],
            title: "Full Name",
        },
        email: {
            anyOf: [
                {
                    type: "string",
                    maxLength: 255,
                    format: "email",
                },
                {
                    type: "null",
                },
            ],
            title: "Email",
        },
    },
    type: "object",
    title: "UserUpdateMe",
};
export const UsersPublicSchema = {
    properties: {
        data: {
            items: {
                $ref: "#/components/schemas/UserPublic",
            },
            type: "array",
            title: "Data",
        },
        count: {
            type: "integer",
            title: "Count",
        },
    },
    type: "object",
    required: ["data", "count"],
    title: "UsersPublic",
};
export const ValidationErrorSchema = {
    properties: {
        loc: {
            items: {
                anyOf: [
                    {
                        type: "string",
                    },
                    {
                        type: "integer",
                    },
                ],
            },
            type: "array",
            title: "Location",
        },
        msg: {
            type: "string",
            title: "Message",
        },
        type: {
            type: "string",
            title: "Error Type",
        },
    },
    type: "object",
    required: ["loc", "msg", "type"],
    title: "ValidationError",
};
