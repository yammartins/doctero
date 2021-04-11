export type Get = (key: string, def: null | string) => void;

export type Dot = (
  target: Record<any, any>,
  path: string | string[],
  def: null | string,
  shouldReturnUndefined?: boolean,
) => void;

export type Value = (
  target: (def?: string) => any,
) => void;

export type Mutate = (callback: (config: Record<any, any>) => void) => void;

export type Config = {
  get: Get,
  mutate: Mutate,
}
