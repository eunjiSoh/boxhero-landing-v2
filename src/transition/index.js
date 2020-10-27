import React from "react"
import sal from "sal.js"

// transition animation이 필요한 페이지를 감싸는 래퍼
function TransitionWrapper(props) {
  // 데스크탑 사이즈 페이지 <-> 모바일 사이즈 페이지로 전환되면서,
  // component가 mount되면 sal을 다시 load한다.
  React.useEffect(() => {
    sal();
  }, [])
  return <>{props.children}</>
}


// 가끔 첫 컨텐츠의 reveal 컨텐츠의 중간이 시작점인 경우가 있다.
// 페이지에 진입하자마자 애니메이션이 시작되어야 하는데 시작되지 않아 컨텐츠가 보이지 않는다.
// 그런 경우, ForceLoadTransition wapper로 감싸
// 해당 컨텐츠를 강제로 reveal시킨다.
function ForceLoadTransition(props) {
  const [load, setState] = React.useState("");
  React.useEffect(() => {
    let timer
    timer = setTimeout(() => {
      setState("sal-animate")
    }, 300)
    return () => {
      // setTimeout으로 발생하는 메모리 누수를 component가 unmounted될때 cleartimeout을 써서 해결
      clearTimeout(timer)
    }
  }, [])
  return (
    <div className={load} data-sal={props.direction}>
      {props.children}
    </div>
  )
}

export {

  TransitionWrapper,
  ForceLoadTransition,
}
