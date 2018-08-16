import * as emotion from "emotion";
import { createSerializer } from "jest-emotion";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

expect.addSnapshotSerializer(createSerializer(emotion));
