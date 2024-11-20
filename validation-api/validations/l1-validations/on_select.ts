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
        const attr = payloadUtils.getJsonPath(testObj, "$.context.bpp_id");
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
        const attr = payloadUtils.getJsonPath(testObj, "$.context.bpp_uri");
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
            "$.message.order.items[*].id",
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
            "$.message.order.items[*].descriptor.code",
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
            "$.message.order.items[*].price.currency",
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
            "$.message.order.items[*].price.value",
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
            "$.message.order.items[*].quantity.selected.count",
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
            "$.message.order.items[*].fulfillment_ids[*]",
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
            "$.message.order.items[*].time.label",
        );
        const nulls = ["null"];
        const skipCheck = false;
        if (skipCheck) continue;
        const output = validations.NONE_IN(attr, nulls);
        if (!output) return false;
    }
    return true;
}

function validate_attribute_21(payload: any) {
    const scope = payloadUtils.getJsonPath(payload, "$");
    for (const testObj of scope) {
        const attr = payloadUtils.getJsonPath(
            testObj,
            "$.message.order.items[*].time.duration",
        );
        const nulls = ["null"];
        const skipCheck = false;
        if (skipCheck) continue;
        const output = validations.NONE_IN(attr, nulls);
        if (!output) return false;
    }
    return true;
}

function validate_attribute_22(payload: any) {
    const scope = payloadUtils.getJsonPath(payload, "$");
    for (const testObj of scope) {
        const attr = payloadUtils.getJsonPath(
            testObj,
            "$.message.order.provider.id",
        );
        const nulls = ["null"];
        const skipCheck = false;
        if (skipCheck) continue;
        const output = validations.NONE_IN(attr, nulls);
        if (!output) return false;
    }
    return true;
}

function validate_attribute_23(payload: any) {
    const scope = payloadUtils.getJsonPath(payload, "$");
    for (const testObj of scope) {
        const attr = payloadUtils.getJsonPath(
            testObj,
            "$.message.order.provider.descriptor.name",
        );
        const nulls = ["null"];
        const skipCheck = false;
        if (skipCheck) continue;
        const output = validations.NONE_IN(attr, nulls);
        if (!output) return false;
    }
    return true;
}

function validate_attribute_24(payload: any) {
    const scope = payloadUtils.getJsonPath(payload, "$");
    for (const testObj of scope) {
        const attr = payloadUtils.getJsonPath(
            testObj,
            "$.message.order.fulfillments[*].id",
        );
        const nulls = ["null"];
        const skipCheck = false;
        if (skipCheck) continue;
        const output = validations.NONE_IN(attr, nulls);
        if (!output) return false;
    }
    return true;
}

function validate_attribute_25(payload: any) {
    const scope = payloadUtils.getJsonPath(payload, "$");
    for (const testObj of scope) {
        const attr = payloadUtils.getJsonPath(
            testObj,
            "$.message.order.fulfillments[*].type",
        );
        const nulls = ["null"];
        const skipCheck = false;
        if (skipCheck) continue;
        const output = validations.NONE_IN(attr, nulls);
        if (!output) return false;
    }
    return true;
}

function validate_attribute_26(payload: any) {
    const scope = payloadUtils.getJsonPath(payload, "$");
    for (const testObj of scope) {
        const attr = payloadUtils.getJsonPath(
            testObj,
            "$.message.order.fulfillments[*].stops[*].location.gps",
        );
        const nulls = ["null"];
        const skipCheck = false;
        if (skipCheck) continue;
        const output = validations.NONE_IN(attr, nulls);
        if (!output) return false;
    }
    return true;
}

function validate_attribute_27(payload: any) {
    const scope = payloadUtils.getJsonPath(payload, "$");
    for (const testObj of scope) {
        const attr = payloadUtils.getJsonPath(
            testObj,
            "$.message.order.fulfillments[*].id",
        );
        const nulls = ["null"];
        const skipCheck = false;
        if (skipCheck) continue;
        const output = validations.NONE_IN(attr, nulls);
        if (!output) return false;
    }
    return true;
}

function validate_attribute_28(payload: any) {
    const scope = payloadUtils.getJsonPath(payload, "$");
    for (const testObj of scope) {
        const attr = payloadUtils.getJsonPath(
            testObj,
            "$.message.order.fulfillments[*].vehicle.category",
        );
        const nulls = ["null"];
        const skipCheck = false;
        if (skipCheck) continue;
        const output = validations.NONE_IN(attr, nulls);
        if (!output) return false;
    }
    return true;
}

function validate_attribute_29(payload: any) {
    const scope = payloadUtils.getJsonPath(payload, "$");
    for (const testObj of scope) {
        const attr = payloadUtils.getJsonPath(
            testObj,
            "$.message.order.fulfillments[*].tags[*].display",
        );
        const nulls = ["null"];
        const skipCheck = false;
        if (skipCheck) continue;
        const output = validations.NONE_IN(attr, nulls);
        if (!output) return false;
    }
    return true;
}

function validate_attribute_30(payload: any) {
    const scope = payloadUtils.getJsonPath(payload, "$");
    for (const testObj of scope) {
        const attr = payloadUtils.getJsonPath(
            testObj,
            "$.message.order.fulfillments[*].tags[*].display",
        );
        const nulls = ["null"];
        const skipCheck = false;
        if (skipCheck) continue;
        const output = validations.NONE_IN(attr, nulls);
        if (!output) return false;
    }
    return true;
}

function validate_attribute_31(payload: any) {
    const scope = payloadUtils.getJsonPath(payload, "$");
    for (const testObj of scope) {
        const attr = payloadUtils.getJsonPath(
            testObj,
            "$.message.order.fulfillments[*].vehicle.cargo_volumne",
        );
        const nulls = ["null"];
        const skipCheck = false;
        if (skipCheck) continue;
        const output = validations.NONE_IN(attr, nulls);
        if (!output) return false;
    }
    return true;
}

function validate_attribute_32(payload: any) {
    const scope = payloadUtils.getJsonPath(payload, "$");
    for (const testObj of scope) {
        const attr = payloadUtils.getJsonPath(
            testObj,
            "$.message.order.quote.price.value",
        );
        const nulls = ["null"];
        const skipCheck = false;
        if (skipCheck) continue;
        const output = validations.NONE_IN(attr, nulls);
        if (!output) return false;
    }
    return true;
}

function validate_attribute_33(payload: any) {
    const scope = payloadUtils.getJsonPath(payload, "$");
    for (const testObj of scope) {
        const attr = payloadUtils.getJsonPath(
            testObj,
            "$.message.order.quote.price.currency",
        );
        const nulls = ["null"];
        const skipCheck = false;
        if (skipCheck) continue;
        const output = validations.NONE_IN(attr, nulls);
        if (!output) return false;
    }
    return true;
}

function validate_attribute_34(payload: any) {
    const scope = payloadUtils.getJsonPath(payload, "$");
    for (const testObj of scope) {
        const attr = payloadUtils.getJsonPath(
            testObj,
            "$.message.order.quote.breakup[*].title",
        );
        const nulls = ["null"];
        const skipCheck = false;
        if (skipCheck) continue;
        const output = validations.NONE_IN(attr, nulls);
        if (!output) return false;
    }
    return true;
}

function validate_attribute_35(payload: any) {
    const scope = payloadUtils.getJsonPath(payload, "$");
    for (const testObj of scope) {
        const attr = payloadUtils.getJsonPath(
            testObj,
            "$.message.order.quote.breakup[*].item.id",
        );
        const nulls = ["null"];
        const skipCheck = false;
        if (skipCheck) continue;
        const output = validations.NONE_IN(attr, nulls);
        if (!output) return false;
    }
    return true;
}

function validate_attribute_36(payload: any) {
    const scope = payloadUtils.getJsonPath(payload, "$");
    for (const testObj of scope) {
        const attr = payloadUtils.getJsonPath(
            testObj,
            "$.message.order.items[*].category_ids[*]",
        );
        const nulls = ["null"];
        const skipCheck = false;
        if (skipCheck) continue;
        const output = validations.NONE_IN(attr, nulls);
        if (!output) return false;
    }
    return true;
}

function validate_attribute_37(payload: any) {
    const scope = payloadUtils.getJsonPath(payload, "$");
    for (const testObj of scope) {
        const attr = payloadUtils.getJsonPath(
            testObj,
            "$.message.order.provider.time.range.start",
        );
        const nulls = ["null"];
        const skipCheck = false;
        if (skipCheck) continue;
        const output = validations.NONE_IN(attr, nulls);
        if (!output) return false;
    }
    return true;
}

function validate_attribute_38(payload: any) {
    const scope = payloadUtils.getJsonPath(payload, "$");
    for (const testObj of scope) {
        const attr = payloadUtils.getJsonPath(
            testObj,
            "$.message.order.provider.time.range.end",
        );
        const nulls = ["null"];
        const skipCheck = false;
        if (skipCheck) continue;
        const output = validations.NONE_IN(attr, nulls);
        if (!output) return false;
    }
    return true;
}

function validate_attribute_39(payload: any) {
    const scope = payloadUtils.getJsonPath(payload, "$");
    for (const testObj of scope) {
        const attr = payloadUtils.getJsonPath(
            testObj,
            "$.message.order.fulfillments[*].type",
        );
        const nulls = ["null"];
        const skipCheck = false;
        if (skipCheck) continue;
        const output = validations.NONE_IN(attr, nulls);
        if (!output) return false;
    }
    return true;
}

function validate_attribute_40(payload: any) {
    const scope = payloadUtils.getJsonPath(payload, "$");
    for (const testObj of scope) {
        const attr = payloadUtils.getJsonPath(
            testObj,
            "$.message.order.quote.breakup[*].item.price.currency",
        );
        const nulls = ["null"];
        const skipCheck = false;
        if (skipCheck) continue;
        const output = validations.NONE_IN(attr, nulls);
        if (!output) return false;
    }
    return true;
}

function validate_attribute_41(payload: any) {
    const scope = payloadUtils.getJsonPath(payload, "$");
    for (const testObj of scope) {
        const attr = payloadUtils.getJsonPath(
            testObj,
            "$.message.order.quote.breakup[*].item.price.value",
        );
        const nulls = ["null"];
        const skipCheck = false;
        if (skipCheck) continue;
        const output = validations.NONE_IN(attr, nulls);
        if (!output) return false;
    }
    return true;
}

function validate_attribute_42(payload: any) {
    const scope = payloadUtils.getJsonPath(payload, "$");
    for (const testObj of scope) {
        const attr = payloadUtils.getJsonPath(
            testObj,
            "$.message.order.quote.breakup[*].item.quantity.selected.count",
        );
        const nulls = ["null"];
        const skipCheck = false;
        if (skipCheck) continue;
        const output = validations.NONE_IN(attr, nulls);
        if (!output) return false;
    }
    return true;
}

function validate_attribute_43(payload: any) {
    const scope = payloadUtils.getJsonPath(payload, "$");
    for (const testObj of scope) {
        const attr = payloadUtils.getJsonPath(
            testObj,
            "$.message.order.cancellation_terms[*].external_ref.url",
        );
        const nulls = ["null"];
        const skipCheck = false;
        if (skipCheck) continue;
        const output = validations.NONE_IN(attr, nulls);
        if (!output) return false;
    }
    return true;
}

function validate_attribute_44(payload: any) {
    const scope = payloadUtils.getJsonPath(payload, "$");
    for (const testObj of scope) {
        const attr = payloadUtils.getJsonPath(
            testObj,
            "$.message.order.cancellation_terms[*].external_ref.mimetype",
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
        const enumList = ["on_select"];
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
        const enumList = ["SJT", "SFSJT", "RJT", "PASS"];
        const enumPath = payloadUtils.getJsonPath(
            testObj,
            "$.message.order.items[*].descriptor.code",
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
        const enumList = ["BUS", "METRO"];
        const enumPath = payloadUtils.getJsonPath(
            testObj,
            "$.message.order.fulfillments[*].vehicle.category",
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
        const enumList = ["ROUTE", "TRIP"];
        const enumPath = payloadUtils.getJsonPath(
            testObj,
            "$.message.order.fulfillments[*].type",
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
        const enumList = ["START", "END", "INTERMEDIATE_STOP", "TRANSIT_STOP"];
        const enumPath = payloadUtils.getJsonPath(
            testObj,
            "$.message.order.fulfillments[*].type",
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
        const enumList = ["QR"];
        const enumPath = payloadUtils.getJsonPath(
            testObj,
            "$.message.order.fulfillments[*].stops[*].authorization.type",
        );
        const skipCheck = false;
        if (skipCheck) continue;
        const output = validations.ALL_IN(enumPath, enumList);
        if (!output) return false;
    }
    return true;
}

function validate_enum_10(payload: any) {
    const scope = payloadUtils.getJsonPath(payload, "$");
    for (const testObj of scope) {
        const enumList = ["UNCLAIMED", "CLAIMED"];
        const enumPath = payloadUtils.getJsonPath(
            testObj,
            "$.message.order.fulfillments[*].stops[*].authorization.status",
        );
        const skipCheck = false;
        if (skipCheck) continue;
        const output = validations.ALL_IN(enumPath, enumList);
        if (!output) return false;
    }
    return true;
}

function validate_enum_11(payload: any) {
    const scope = payloadUtils.getJsonPath(payload, "$");
    for (const testObj of scope) {
        const enumList = [
            "SOFT_CANCEL",
            "CONFIRM_CANCEL",
            "ACTIVE",
            "COMPLETE",
            "CANCELLED",
        ];
        const enumPath = payloadUtils.getJsonPath(
            testObj,
            "$.message.order.status",
        );
        const skipCheck = false;
        if (skipCheck) continue;
        const output = validations.ALL_IN(enumPath, enumList);
        if (!output) return false;
    }
    return true;
}

function validate_enum_12(payload: any) {
    const scope = payloadUtils.getJsonPath(payload, "$");
    for (const testObj of scope) {
        const enumList = [
            "BASE_PRICE",
            "REFUND",
            "CANCELLATION_CHARGES",
            "OFFER",
            "TOLL",
        ];
        const enumPath = payloadUtils.getJsonPath(
            testObj,
            "$.message.order.quote.breakup[*].title",
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
    validate_attribute_21,
    validate_attribute_22,
    validate_attribute_23,
    validate_attribute_24,
    validate_attribute_25,
    validate_attribute_26,
    validate_attribute_27,
    validate_attribute_28,
    validate_attribute_29,
    validate_attribute_30,
    validate_attribute_31,
    validate_attribute_32,
    validate_attribute_33,
    validate_attribute_34,
    validate_attribute_35,
    validate_attribute_36,
    validate_attribute_37,
    validate_attribute_38,
    validate_attribute_39,
    validate_attribute_40,
    validate_attribute_41,
    validate_attribute_42,
    validate_attribute_43,
    validate_attribute_44,
    validate_enum_1,
    validate_enum_2,
    validate_enum_3,
    validate_enum_4,
    validate_enum_5,
    validate_enum_6,
    validate_enum_7,
    validate_enum_8,
    validate_enum_9,
    validate_enum_10,
    validate_enum_11,
    validate_enum_12,
];

export function validateOn_select(payload: string) {
    for (const fn of testFunctions) {
        const result = fn(payload);
        if (!result) {
            return { valid: false, error: fn.name };
        }
    }
    return { valid: true };
}
