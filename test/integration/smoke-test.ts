import { mock } from "simple-mock";
import {
  Webhooks,
  sign,
  verify,
  createEventHandler,
  createMiddleware,
} from "../../src";

test("@octokit/webhooks", () => {
  const emitWarningMock = mock(process, "emitWarning");
  const api = new Webhooks({
    secret: "mysecret",
  });

  expect(typeof api.sign).toBe("function");
  expect(typeof api.verify).toBe("function");
  expect(typeof api.on).toBe("function");
  expect(typeof api.removeListener).toBe("function");
  expect(typeof api.receive).toBe("function");
  expect(typeof api.middleware).toBe("function");
  expect(typeof api.verifyAndReceive).toBe("function");
  expect(emitWarningMock.called).toBe(false);
});

test('require("@octokit/webhooks").sign', () => {
  const emitWarningMock = mock(process, "emitWarning");

  expect(() => {
    sign("1234", {});
  }).not.toThrow();
  expect(emitWarningMock.called).toBe(false);

  expect(emitWarningMock.called).toBe(false);
});

test('require("@octokit/webhooks").verify', () => {
  const emitWarningMock = mock(process, "emitWarning");

  expect(() => {
    verify("1234", {}, "randomSignature");
  }).not.toThrow();
  expect(emitWarningMock.called).toBe(false);

  expect(emitWarningMock.called).toBe(false);
});

test('require("@octokit/webhooks").createEventHandler', () => {
  const emitWarningMock = mock(process, "emitWarning");

  expect(() => {
    createEventHandler({});
  }).not.toThrow();
  expect(emitWarningMock.called).toBe(false);

  expect(emitWarningMock.called).toBe(false);
});

test('require("@octokit/webhooks").createMiddleware', () => {
  const emitWarningMock = mock(process, "emitWarning");

  expect(() => {
    createMiddleware({ secret: "1234" });
  }).not.toThrow();
  expect(emitWarningMock.called).toBe(false);

  expect(emitWarningMock.called).toBe(false);
});
