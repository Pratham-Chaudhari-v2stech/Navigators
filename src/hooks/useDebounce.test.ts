import { renderHook, act } from '@testing-library/react-native';
import useDebounce from './useDebounce';

describe('useDebounce', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  test('returns the initial value immediately', () => {
    const { result } = renderHook(() =>
      useDebounce('Hello', 500),
    );

    expect(result.current).toBe('Hello');
  });

  test('updates the value after the specified delay', () => {
    const { result, rerender } = renderHook<
      string,
      { value: string }
    >(
      ({ value }) => useDebounce(value, 500),
      {
        initialProps: {
          value: 'Hello',
        },
      },
    );

    expect(result.current).toBe('Hello');

    rerender({
      value: 'World',
    });

    // Before 500ms, value should not change
    expect(result.current).toBe('Hello');

    act(() => {
      jest.advanceTimersByTime(500);
    });

    expect(result.current).toBe('World');
  });

  test('clears the previous timer when value changes quickly', () => {
    const { result, rerender } = renderHook<
      string,
      { value: string }
    >(
      ({ value }) => useDebounce(value, 500),
      {
        initialProps: {
          value: 'A',
        },
      },
    );

    rerender({
      value: 'B',
    });

    act(() => {
      jest.advanceTimersByTime(300);
    });

    rerender({
      value: 'C',
    });

    act(() => {
      jest.advanceTimersByTime(300);
    });

    expect(result.current).toBe('A');

    act(() => {
      jest.advanceTimersByTime(200);
    });

    expect(result.current).toBe('C');
  });
});