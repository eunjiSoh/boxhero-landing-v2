import React from "react"
import sal from "sal.js"

function CommonTransition({
  direction,
  item,
  duration = "800",
  delay = "200",
  // 스크린 사이즈가 767px이하로 줄어들거나 그 이상으로 커지면,
  // 최상단으로 이동하므로 한번만 전달해도 된다.
  is_mobile = null,
  options = { once: true },
}) {
  const [, setState] = React.useState(true)

  // 이미 활성화 된 sal의 options를 초기화 하기 위해 reset method를 사용하여 viewport 사이즈에 따라 옵션을 제공한다.
  // sal의 options 인터페이스에 따라 options를 한번 더 호출하여 reset method 처럼 사용하기도 하고, 새로운 옵션을 추가하기도 한다.
  sal({
    options: options,
  })

  // is_desktop의 인자가 바뀌면 인자를 상태에 저장하여 컴포넌트를 리렌더링 함,
  // sal의 옵션을 리셋하면 다시 sal이 관찰을 시작한다.
  React.useEffect(() => {
    setState(is_mobile)
  }, [is_mobile])

  return (
    <div
      data-sal-duration={duration}
      data-sal={direction}
      data-sal-delay={delay}
      data-sal-easing={direction}
    >
      {item}
    </div>
  )
}

// slide up transiton
function TransitionUp({
  item, // 필수
  ...arg
}) {
  //   console.log(item)
  return CommonTransition({ direction: "slide-up", item: item, ...arg })
}

// slide left transition
function TransitionLeft({
  item, // 필수
  ...arg
}) {
  return CommonTransition({ direction: "slide-left", item: item, ...arg })
}

//slide right transition
function TransitionRight({
  item, // 필수
  ...arg
}) {
  return CommonTransition({ direction: "slide-right", item: item, ...arg })
}

// slide image transition
function TransitionImage({
  item, // 필수
  ...arg
}) {
  return CommonTransition({
    direction: "slide-up-image",
    duration: 1300,
    item: item,
    ...arg,
  })
}

// slide image transition
function TransitionPiano({
  item, // 필수
  ...arg
}) {
  return CommonTransition({
    direction: "slide-up-image-piano",
    item: item,
    ...arg,
  })
}

export {
  TransitionUp,
  TransitionLeft,
  TransitionRight,
  TransitionImage,
  TransitionPiano,
}