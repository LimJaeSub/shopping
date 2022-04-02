// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { server } from './mocks/server';

beforeAll(()=>server.listen) //테스트를 시작하기 전에 서버를 실행
afterEach(()=>server.resetHandlers) //테스트가 끝나면 리셋 해줌
afterAll(()=>server.close) //테스트가 끝나면 서버 close
