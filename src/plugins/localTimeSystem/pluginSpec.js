/*****************************************************************************
 * Open MCT, Copyright (c) 2014-2020, United States Government
 * as represented by the Administrator of the National Aeronautics and Space
 * Administration. All rights reserved.
 *
 * Open MCT is licensed under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0.
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 *
 * Open MCT includes source code licensed under additional open source
 * licenses. See the Open Source Licenses file (LICENSES.md) included with
 * this source code distribution or the Licensing information page available
 * at runtime from the About dialog for additional information.
 *****************************************************************************/

import LocalTimeFormat from './LocalTimeFormat.js';
import LocalTimeSystem from './LocalTimeSystem.js';

describe("The local time", () => {
    const LOCAL_FORMAT_KEY = 'local-format';
    const LOCAL_SYSTEM_KEY = 'local';
    const JUNK = "junk";
    const TIMESTAMP = -14256000000;
    const DATESTRING = '1969-07-19 5:00:00.000 pm';
    let localTimeFormatter;
    let localTimeSystem;

    describe("system", function () {

        beforeEach(() => {
            localTimeSystem = new LocalTimeSystem();
        });

        it("uses the local-format time format", function () {
            expect(localTimeSystem.timeFormat).toBe(LOCAL_FORMAT_KEY);
        });

        it("is UTC based", function () {
            expect(localTimeSystem.isUTCBased).toBe(true);
        });

        it("defines expected metadata", function () {
            expect(localTimeSystem.key).toBe(LOCAL_SYSTEM_KEY);
            expect(localTimeSystem.name).toBeDefined();
            expect(localTimeSystem.cssClass).toBeDefined();
            expect(localTimeSystem.durationFormat).toBeDefined();
        });
    });

    describe("formatter", function () {

        beforeEach(() => {
            localTimeFormatter = new LocalTimeFormat();
        });

        it("will format a timestamp in local time format", () => {
            expect(localTimeFormatter.format(TIMESTAMP)).toBe(DATESTRING);
        });

        it("will parse an local time Date String into milliseconds", () => {
            expect(localTimeFormatter.parse(DATESTRING)).toBe(TIMESTAMP);
        });

        it("will validate correctly", () => {
            expect(localTimeFormatter.validate(DATESTRING)).toBe(true);
            expect(localTimeFormatter.validate(JUNK)).toBe(false);
        });
    });
});
