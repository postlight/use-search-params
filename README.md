# @postlight/use-search-params

A react hook that provides a api for working with query parameters, compatible with the [`URLSearchParams`](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams) API.

## Usage

```tsx
import useSearchParams from "@postlight/use-search-params";
import React, { useState } from "react";

export default function Counter(): JSX.Element {
  const searchParams = useSearchParams();
  const counterValue = +(searchParams.get("count") ?? 0);

  return (
    <button onClick={() => searchParams.set("count", counterValue + 1)}>
      Increment: {counterValue}
    </button>
  );
}
```

## License

Licensed under either of

- Apache License, Version 2.0
  ([LICENSE-APACHE](LICENSE-APACHE) or http://www.apache.org/licenses/LICENSE-2.0)
- MIT license
  ([LICENSE-MIT](LICENSE-MIT) or http://opensource.org/licenses/MIT)

at your option.

## Contribution

Unless you explicitly state otherwise, any contribution intentionally submitted
for inclusion in the work by you, as defined in the Apache-2.0 license, shall be
dual licensed as above, without any additional terms or conditions.
