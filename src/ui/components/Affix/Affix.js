import * as React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { on, getOffset } from "dom-lib";
import bindElementResize, {
  unbind as unbindElementResize,
} from "element-resize-event";

import "./Affix.styles.scss";

class Affix extends React.Component {
  static propTypes = {
    top: PropTypes.number,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    top: 0,
  };

  containerRef = null;
  scrollListener = null;

  constructor(props) {
    super(props);
    this.state = {
      offset: null,
      fixed: false,
    };
    this.containerRef = React.createRef();
  }

  componentDidMount() {
    this.setContainerOffset();
    this.scrollListener = on(window, "scroll", this.updatePosition);
    bindElementResize(
      this.containerRef.current,
      this.setContainerOffset,
    );
  }

  componentWillUnmount() {
    if (this.scrollListener) {
      this.scrollListener.off();
    }
    if (this.containerRef.current) {
      unbindElementResize(this.containerRef.current);
    }
  }

  setContainerOffset = () => {
    this.setState(() => {
      return { offset: getOffset(this.containerRef.current) };
    });
  };

  updatePosition = () => {
    const offset = this.state.offset;
    const { top, onChange } = this.props;
    const scrollY = window.scrollY || window.pageYOffset;
    const fixed = scrollY - (offset.top - top) >= 0;

    if (fixed !== this.state.fixed) {
      this.setState({ fixed });
      onChange && onChange(fixed);
    }
  };

  render() {
    const {
      classPrefix = "affix",
      children,
      top,
      className,
      style,
    } = this.props;
    const { fixed, offset } = this.state;
    const classes = classNames(className, {
      [classPrefix]: fixed,
    });

    const placeholderStyles = fixed
      ? { width: offset.width, height: offset.height }
      : undefined;
    const affixStyle = fixed
      ? {
          top,
          width: offset.width,
          zIndex: 10,
          ...style,
        }
      : style;

    return (
      <React.Fragment>
        <div
          className={classes}
          style={affixStyle}
          ref={this.containerRef}
        >
          {children}
        </div>
        {fixed && (
          <div
            className="affix-fixed"
            aria-hidden="true"
            style={placeholderStyles}
          ></div>
        )}
      </React.Fragment>
    );
  }
}

export default Affix;
