import validations from "../../utils/validation-utils";
import payloadUtils from "../../utils/payload-utils";

function validate_attribute_1(payload: any) {
    const scope = payloadUtils.getJsonPath(payload, "$");
    for (const testObj of scope) {
        const attr = payloadUtils.getJsonPath(
            testObj,
            "$.context.location.country.code",
        );
        const nulls = ["null"];
        const skipCheck = false;
        if (skipCheck) continue;
        const output = validations.NONE_IN(attr, nulls);
        if (!output) return false;
    }
    return true;
}

function validate_attribute_2(payload: any) {
    const scope = payloadUtils.getJsonPath(payload, "$");
    for (const testObj of scope) {
        const attr = payloadUtils.getJsonPath(
            testObj,
            "$.context.location.city.code",
        );
        const nulls = ["null"];
        const skipCheck = false;
        if (skipCheck) continue;
        const output = validations.NONE_IN(attr, nulls);
        if (!output) return false;
    }
    return true;
}

function validate_attribute_3(payload: any) {
    const scope = payloadUtils.getJsonPath(payload, "$");
    for (const testObj of scope) {
        const attr = payloadUtils.getJsonPath(testObj, "$.context.domain");
        const nulls = ["null"];
        const skipCheck = false;
        if (skipCheck) continue;
        const output = validations.NONE_IN(attr, nulls);
        if (!output) return false;
    }
    return true;
}

function validate_attribute_4(payload: any) {
    const scope = payloadUtils.getJsonPath(payload, "$");
    for (const testObj of scope) {
        const attr = payloadUtils.getJsonPath(testObj, "$.context.timestamp");
        const nulls = ["null"];
        const skipCheck = false;
        if (skipCheck) continue;
        const output = validations.NONE_IN(attr, nulls);
        if (!output) return false;
    }
    return true;
}

function validate_attribute_5(payload: any) {
    const scope = payloadUtils.getJsonPath(payload, "$");
    for (const testObj of scope) {
        const attr = payloadUtils.getJsonPath(testObj, "$.context.bap_id");
        const nulls = ["null"];
        const skipCheck = false;
        if (skipCheck) continue;
        const output = validations.NONE_IN(attr, nulls);
        if (!output) return false;
    }
    return true;
}

function validate_attribute_6(payload: any) {
    const scope = payloadUtils.getJsonPath(payload, "$");
    for (const testObj of scope) {
        const attr = payloadUtils.getJsonPath(
            testObj,
            "$.context.transaction_id",
        );
        const nulls = ["null"];
        const skipCheck = false;
        if (skipCheck) continue;
        const output = validations.NONE_IN(attr, nulls);
        if (!output) return false;
    }
    return true;
}

function validate_attribute_7(payload: any) {
    const scope = payloadUtils.getJsonPath(payload, "$");
    for (const testObj of scope) {
        const attr = payloadUtils.getJsonPath(testObj, "$.context.message_id");
        const nulls = ["null"];
        const skipCheck = false;
        if (skipCheck) continue;
        const output = validations.NONE_IN(attr, nulls);
        if (!output) return false;
    }
    return true;
}

function validate_attribute_8(payload: any) {
    const scope = payloadUtils.getJsonPath(payload, "$");
    for (const testObj of scope) {
        const attr = payloadUtils.getJsonPath(testObj, "$.context.version");
        const nulls = ["null"];
        const skipCheck = false;
        if (skipCheck) continue;
        const output = validations.NONE_IN(attr, nulls);
        if (!output) return false;
    }
    return true;
}

function validate_attribute_9(payload: any) {
    const scope = payloadUtils.getJsonPath(payload, "$");
    for (const testObj of scope) {
        const attr = payloadUtils.getJsonPath(testObj, "$.context.action");
        const nulls = ["null"];
        const skipCheck = false;
        if (skipCheck) continue;
        const output = validations.NONE_IN(attr, nulls);
        if (!output) return false;
    }
    return true;
}

function validate_attribute_10(payload: any) {
    const scope = payloadUtils.getJsonPath(payload, "$");
    for (const testObj of scope) {
        const attr = payloadUtils.getJsonPath(testObj, "$.context.bap_uri");
        const nulls = ["null"];
        const skipCheck = false;
        if (skipCheck) continue;
        const output = validations.NONE_IN(attr, nulls);
        if (!output) return false;
    }
    return true;
}

function validate_attribute_11(payload: any) {
    const scope = payloadUtils.getJsonPath(payload, "$");
    for (const testObj of scope) {
        const attr = payloadUtils.getJsonPath(testObj, "$.context.ttl");
        const nulls = ["null"];
        const skipCheck = false;
        if (skipCheck) continue;
        const output = validations.NONE_IN(attr, nulls);
        if (!output) return false;
    }
    return true;
}

function validate_attribute_12(payload: any) {
    const scope = payloadUtils.getJsonPath(payload, "$");
    for (const testObj of scope) {
        const attr = payloadUtils.getJsonPath(
            testObj,
            "$.message.intent.fulfillment.vehicle.category",
        );
        const nulls = ["null"];
        const skipCheck = false;
        if (skipCheck) continue;
        const output = validations.NONE_IN(attr, nulls);
        if (!output) return false;
    }
    return true;
}

function validate_attribute_13(payload: any) {
    const scope = payloadUtils.getJsonPath(payload, "$");
    for (const testObj of scope) {
        const attr = payloadUtils.getJsonPath(
            testObj,
            "$.message.intent.payment.tags[*].display",
        );
        const nulls = ["null"];
        const skipCheck = false;
        if (skipCheck) continue;
        const output = validations.NONE_IN(attr, nulls);
        if (!output) return false;
    }
    return true;
}

function validate_attribute_14(payload: any) {
    const scope = payloadUtils.getJsonPath(payload, "$");
    for (const testObj of scope) {
        const attr = payloadUtils.getJsonPath(
            testObj,
            "$.message.intent.payment.tags[*].list[*].descriptor.name",
        );
        const nulls = ["null"];
        const skipCheck = false;
        if (skipCheck) continue;
        const output = validations.NONE_IN(attr, nulls);
        if (!output) return false;
    }
    return true;
}

function validate_attribute_15(payload: any) {
    const scope = payloadUtils.getJsonPath(payload, "$");
    for (const testObj of scope) {
        const attr = payloadUtils.getJsonPath(
            testObj,
            "$.message.intent.payment.tags[*].list[*].descriptor.name",
        );
        const nulls = ["null"];
        const skipCheck = false;
        if (skipCheck) continue;
        const output = validations.NONE_IN(attr, nulls);
        if (!output) return false;
    }
    return true;
}

function validate_attribute_16(payload: any) {
    const scope = payloadUtils.getJsonPath(payload, "$");
    for (const testObj of scope) {
        const attr = payloadUtils.getJsonPath(
            testObj,
            "$.message.intent.payment.tags[*].display",
        );
        const nulls = ["null"];
        const skipCheck = false;
        if (skipCheck) continue;
        const output = validations.NONE_IN(attr, nulls);
        if (!output) return false;
    }
    return true;
}

function validate_attribute_17(payload: any) {
    const scope = payloadUtils.getJsonPath(payload, "$");
    for (const testObj of scope) {
        const attr = payloadUtils.getJsonPath(
            testObj,
            "$.message.intent.payment.tags[*].list[*].value",
        );
        const nulls = ["null"];
        const skipCheck = false;
        if (skipCheck) continue;
        const output = validations.NONE_IN(attr, nulls);
        if (!output) return false;
    }
    return true;
}

function validate_attribute_18(payload: any) {
    const scope = payloadUtils.getJsonPath(payload, "$");
    for (const testObj of scope) {
        const attr = payloadUtils.getJsonPath(
            testObj,
            "$.message.intent.payment.tags[*].list[*].value",
        );
        const nulls = ["null"];
        const skipCheck = false;
        if (skipCheck) continue;
        const output = validations.NONE_IN(attr, nulls);
        if (!output) return false;
    }
    return true;
}

function validate_attribute_19(payload: any) {
    const scope = payloadUtils.getJsonPath(payload, "$");
    for (const testObj of scope) {
        const attr = payloadUtils.getJsonPath(
            testObj,
            "$.message.intent.payment.tags[*].list[*].value",
        );
        const nulls = ["null"];
        const skipCheck = false;
        if (skipCheck) continue;
        const output = validations.NONE_IN(attr, nulls);
        if (!output) return false;
    }
    return true;
}

function validate_attribute_20(payload: any) {
    const scope = payloadUtils.getJsonPath(payload, "$");
    for (const testObj of scope) {
        const attr = payloadUtils.getJsonPath(
            testObj,
            "$.message.intent.payment.tags[*].list[*].value",
        );
        const nulls = ["null"];
        const skipCheck = false;
        if (skipCheck) continue;
        const output = validations.NONE_IN(attr, nulls);
        if (!output) return false;
    }
    return true;
}

function validate_enum_1(payload: any) {
    const scope = payloadUtils.getJsonPath(payload, "$");
    for (const testObj of scope) {
        const enumList = ["search"];
        const enumPath = payloadUtils.getJsonPath(testObj, "$.context.action");
        const skipCheck = false;
        if (skipCheck) continue;
        const output = validations.ALL_IN(enumPath, enumList);
        if (!output) return false;
    }
    return true;
}

function validate_enum_2(payload: any) {
    const scope = payloadUtils.getJsonPath(payload, "$");
    for (const testObj of scope) {
        const enumList = ["IND"];
        const enumPath = payloadUtils.getJsonPath(
            testObj,
            "$.context.location.country.code",
        );
        const skipCheck = false;
        if (skipCheck) continue;
        const output = validations.ALL_IN(enumPath, enumList);
        if (!output) return false;
    }
    return true;
}

function validate_enum_3(payload: any) {
    const scope = payloadUtils.getJsonPath(payload, "$");
    for (const testObj of scope) {
        const enumList = ["std:080"];
        const enumPath = payloadUtils.getJsonPath(
            testObj,
            "$.context.location.city.code",
        );
        const skipCheck = false;
        if (skipCheck) continue;
        const output = validations.ALL_IN(enumPath, enumList);
        if (!output) return false;
    }
    return true;
}

function validate_enum_4(payload: any) {
    const scope = payloadUtils.getJsonPath(payload, "$");
    for (const testObj of scope) {
        const enumList = ["ONDC:TRV11"];
        const enumPath = payloadUtils.getJsonPath(testObj, "$.context.domain");
        const skipCheck = false;
        if (skipCheck) continue;
        const output = validations.ALL_IN(enumPath, enumList);
        if (!output) return false;
    }
    return true;
}

function validate_enum_5(payload: any) {
    const scope = payloadUtils.getJsonPath(payload, "$");
    for (const testObj of scope) {
        const enumList = ["BUS", "METRO"];
        const enumPath = payloadUtils.getJsonPath(
            testObj,
            "$.message.intent.fulfillment.vehicle.category",
        );
        const skipCheck = false;
        if (skipCheck) continue;
        const output = validations.ALL_IN(enumPath, enumList);
        if (!output) return false;
    }
    return true;
}

function validate_enum_6(payload: any) {
    const scope = payloadUtils.getJsonPath(payload, "$");
    for (const testObj of scope) {
        const enumList = ["ROUTE", "TRIP"];
        const enumPath = payloadUtils.getJsonPath(
            testObj,
            "$.message.intent.fulfillment.type",
        );
        const skipCheck = false;
        if (skipCheck) continue;
        const output = validations.ALL_IN(enumPath, enumList);
        if (!output) return false;
    }
    return true;
}

function validate_enum_7(payload: any) {
    const scope = payloadUtils.getJsonPath(payload, "$");
    for (const testObj of scope) {
        const enumList = ["START", "END", "INTERMEDIATE_STOP", "TRANSIT_STOP"];
        const enumPath = payloadUtils.getJsonPath(
            testObj,
            "$.message.intent.fulfillment.stops[*].type",
        );
        const skipCheck = false;
        if (skipCheck) continue;
        const output = validations.ALL_IN(enumPath, enumList);
        if (!output) return false;
    }
    return true;
}

function validate_enum_8(payload: any) {
    const scope = payloadUtils.getJsonPath(payload, "$");
    for (const testObj of scope) {
        const enumList = ["QR"];
        const enumPath = payloadUtils.getJsonPath(
            testObj,
            "$.message.intent.fulfillment.stops[*].authorization.type",
        );
        const skipCheck = false;
        if (skipCheck) continue;
        const output = validations.ALL_IN(enumPath, enumList);
        if (!output) return false;
    }
    return true;
}

function validate_enum_9(payload: any) {
    const scope = payloadUtils.getJsonPath(payload, "$");
    for (const testObj of scope) {
        const enumList = ["UNCLAIMED", "CLAIMED"];
        const enumPath = payloadUtils.getJsonPath(
            testObj,
            "$.message.intent.fulfillment.stops[*].authorization.status",
        );
        const skipCheck = false;
        if (skipCheck) continue;
        const output = validations.ALL_IN(enumPath, enumList);
        if (!output) return false;
    }
    return true;
}

const testFunctions: Array<(payload: string) => boolean> = [
    validate_attribute_1,
    validate_attribute_2,
    validate_attribute_3,
    validate_attribute_4,
    validate_attribute_5,
    validate_attribute_6,
    validate_attribute_7,
    validate_attribute_8,
    validate_attribute_9,
    validate_attribute_10,
    validate_attribute_11,
    validate_attribute_12,
    validate_attribute_13,
    validate_attribute_14,
    validate_attribute_15,
    validate_attribute_16,
    validate_attribute_17,
    validate_attribute_18,
    validate_attribute_19,
    validate_attribute_20,
    validate_enum_1,
    validate_enum_2,
    validate_enum_3,
    validate_enum_4,
    validate_enum_5,
    validate_enum_6,
    validate_enum_7,
    validate_enum_8,
    validate_enum_9,
];

export function validateSearch(payload: string) {
    for (const fn of testFunctions) {
        const result = fn(payload);
        if (!result) {
            return { valid: false, error: fn.name };
        }
    }
    return { valid: true };
}
