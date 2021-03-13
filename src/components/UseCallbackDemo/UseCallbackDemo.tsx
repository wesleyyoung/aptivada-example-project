import './UseCallbackDemo.css';
import {useCallback, useState} from "react";
import {Button} from "semantic-ui-react";

export function UseCallbackDemo() {
  const [delta, setDelta] = useState(1);
  const [c, setC] = useState(0);

  // No dependencies (i.e. []) for now
  const incrementDelta = useCallback(() => setDelta(delta => delta + 1), []);
  const increment = useCallback(() => setC(c => c + delta), []);

  // Register the functions so we can count them
  // functions.add(incrementDelta);
  // functions.add(increment);

  return (
    <div>
      <div> Delta is {delta} </div>
      <div> Counter is {c} </div>
      <br/>
      <div>
        <Button onClick={incrementDelta}>Increment Delta</Button>
        <Button onClick={increment}>Increment Counter</Button>
      </div>
      <br/>
      {/*<div> Newly Created Functions: {functions.size - 2} </div>*/}
    </div>
  )
}
