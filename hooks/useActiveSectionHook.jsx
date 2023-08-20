const { ActiveSectionContext } = require("@/context/ActiveSectionContext");
const { useInView } = require("react-intersection-observer");
const { useEffect, useContext } = require("react");

function useActiveSectionHook({ sectionName, threshold = 0.4 }) {
  const { ref, inView } = useInView({
    threshold,
  });
  const { setActiveSection, timeOfLastClick } =
    useContext(ActiveSectionContext);

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);

  return { ref };
}

export default useActiveSectionHook;
