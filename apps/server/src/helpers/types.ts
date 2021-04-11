export type Get = (key: string, def?: null | string) => string;

export type Dot = (
  target: Record<any, any>,
  path: string | string[],
  def: null | string,
  shouldReturnUndefined?: boolean,
) => string | void | Record<any, any>;

export type Value = (
  target: (def?: string) => any,
) => void;

export type Mutate = (callback: (config: Record<any, any>) => void) => void;

export type Config = {
  get: Get,
  mutate: Mutate,
}
