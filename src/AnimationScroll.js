/* eslint-disable no-restricted-globals */
const AnimationScroll = () => {
  const animationItems = document.querySelectorAll('._animation-item');
  if (animationItems.length > 0) {
    let animationOnScroll;
    let offset;
    offset = function (el) {
      const rect = el.getBoundingClientRect(),
        scrollLeft = window.scrollX || document.documentElement.scrollLeft,
        scrollTop = window.screenY || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
    };
    animationOnScroll = function () {
      for (let i = 0; i < animationItems.length; i++) {
        const animationItem = animationItems[i];
        const animationItemHeight = animationItem.offsetHeight;
        const animationItenOffset = offset(animationItem).top;
        const animationStart = 4;
        let animationItemPoint = window.innerHeight - animationItemHeight / animationStart;
        if (animationItemHeight > window.innerHeight) {
          animationItemPoint = window.innerHeight - window.innerHeight / animationStart;
        }
        if (scrollY > animationItenOffset - animationItemPoint && scrollY < animationItenOffset + animationItemHeight) {
          animationItem.classList.add('_active');
        } else {
          if (!animationItem.classList.contains('_no-hide')) {
            animationItem.classList.remove('_active');
          }
        }
      }
      window.addEventListener('scroll', animationOnScroll);
    };
    animationOnScroll();
  }
};

export default AnimationScroll;
