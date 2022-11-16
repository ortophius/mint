import { ComponentType } from "react";

type FetchFunction<T> = (req: Express.Request) => Promise<T>;
type ComponentWithPrefetch<T> = ComponentType & { fn: FetchFunction<T> };

export const withPrefetch = <C extends ComponentType, T = never>(
  component: ComponentType & C,
  fn: FetchFunction<T>
) => {
  const castedComponent = component as ComponentWithPrefetch<T>;
  castedComponent.fn = fn;
  return castedComponent;
};

const getPrefetchFromComponent = <T>(component: ComponentWithPrefetch<T>) => {
  if (!component.fn) return null;
  return component.fn;
};
