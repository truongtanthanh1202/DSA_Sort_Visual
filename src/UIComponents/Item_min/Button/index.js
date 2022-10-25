import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const CSS_CLASSES = {
  ROOT: 'Button',
  ICON: 'Button__Icon',
  LABEL: 'Button__Label',
  DENSE: 'Button_dense',
  RAISED: 'Button_raised',
  OUTLINED: 'Button_outlined',
  UNELEVATED: 'Button_unelevated',
  UPPERCASE: 'Button_uppercase'
};

function buildClassNames(rootClass, ClassMappings, userClassName) {
  let classNames = `${rootClass}`;
  Object.keys(ClassMappings).forEach((className) => {
    if (ClassMappings[className]) {
      classNames += ` ${className}`;
    }
  });
  classNames += ` ${userClassName}`;
  return classNames;
}

function renderIcon(icon, iconClass) {
  const ICON = icon;
  return <ICON className={`${CSS_CLASSES.ICON} ${iconClass}`} />;
}

const Button = ({
  className,
  raised,
  unelevated,
  outlined,
  dense,
  notCased,
  disabled,
  icon,
  iconClass,
  href,
  onClick,
  children
}) => {
  const classNames = buildClassNames(
    CSS_CLASSES.ROOT,
    {
      [CSS_CLASSES.DENSE]: dense,
      [CSS_CLASSES.RAISED]: raised,
      [CSS_CLASSES.OUTLINED]: outlined,
      [CSS_CLASSES.UNELEVATED]: unelevated,
      [CSS_CLASSES.UPPERCASE]: !notCased
    },
    className
  );

  if (href) {
    return (
      <a href={href} className={classNames} disabled={disabled}>
        {icon ? renderIcon(icon, iconClass) : null}
        <span className="Button__Label">{children}</span>
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={classNames}
      disabled={disabled}
    >
      {icon ? renderIcon(icon, iconClass) : null}
      <span className="Button__Label">{children}</span>
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  raised: PropTypes.bool,
  unelevated: PropTypes.bool,
  outlined: PropTypes.bool,
  dense: PropTypes.bool,
  notCased: PropTypes.bool,
  disabled: PropTypes.bool,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  href: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.node])
};

export default Button;
