import * as ts from 'typescript';
import * as util from 'util';
import * as fs from "fs";

const options = {
};

const program = ts.createProgram([
    './model/index.d.ts',
    './model/schema/ad.d.ts',
    './model/schema/coupon.d.ts',
    './model/schema/merchandise.d.ts',
    './model/schema/merchant.d.ts',
    './model/schema/order.d.ts',
    './model/schema/region.d.ts',
    './model/schema/role.d.ts',
    './model/schema/table.d.ts',
    './model/schema/user.d.ts',
    './model/schema/type/index.d.ts',
], options);

const x = program.getTypeChecker();
