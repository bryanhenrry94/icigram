import * as React from "react"
import { Svg } from './styles';

export const Logo = (props) => (
  <Svg
    width={373.84}
    height={122.64}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="63.08 13.68 373.84 122.64"
    style={{
      background: "0 0",
    }}
    preserveAspectRatio="xMidYMid"
    {...props}
  >
    <defs>
      <linearGradient
        id="b"
        x1={0}
        x2={1}
        y1={0.5}
        y2={0.5}
        gradientUnits="objectBoundingBox"
      >
        <stop offset={0} stopColor="#200005" />
        <stop offset={1} stopColor="#0ff" />
      </linearGradient>
      <filter id="a" x="-100%" y="-100%" width="300%" height="300%">
        <feFlood floodColor="#fffcd9" result="flood" />
        <feComposite
          operator="in"
          in2="SourceAlpha"
          in="flood"
          result="shadow"
        />
        <feOffset dx={-4} dy={-4} in="SourceGraphic" result="offset-1" />
        <feOffset dx={4} dy={4} in="shadow" result="offset-2" />
        <feMerge>
          <feMergeNode in="offset-2" />
          <feMergeNode in="offset-1" />
        </feMerge>
      </filter>
    </defs>
    <g filter="url(#a)">
      <path
        d="M16.45-3.52q-1.99 4.8-8.32 4.8-3.27 0-5.31-2.24-1.73-1.98-1.73-3.97 0-5.18 2.37-15.29l2.36-12.42 13-1.28-3.91 20.22q-1.09 4.74-1.09 6.4 0 3.65 2.63 3.78ZM6.98-41.54q0-2.49 2.08-3.84 2.08-1.34 5.08-1.34 3.01 0 4.84 1.34 1.82 1.35 1.82 3.84 0 2.5-2.02 3.78-2.01 1.28-5.02 1.28t-4.9-1.28q-1.88-1.28-1.88-3.78Zm46.33 14.92q0 2.68-2.24 4.35-2.24 1.66-5.89 1.66-1.53 0-2.43-.45.71-1.66.93-3.74.22-2.08.22-2.66 0-2.68-1.85-2.68-1.28 0-2.72 1.6-1.44 1.6-2.66 4.09-2.69 5.76-2.69 11.59 0 3.2 1.22 4.64 1.22 1.44 3.9 1.44 3.72 0 6.66-3.08.83-.96 1.28-2.04 2.43 1.28 2.43 4.8 0 3.58-3.97 5.95-4.09 2.43-10.62 2.43-12.99 0-12.99-13.76 0-10.05 5.69-15.81 5.51-5.63 15.62-5.63t10.11 7.3Zm27.65 15.8q1.6 1.09 1.6 3.49 0 2.4-1.22 3.94-1.21 1.53-3.2 2.56-4.09 2.11-8.51 2.11-4.41 0-7.01-.96-2.59-.96-4.32-2.75-3.39-3.39-3.39-9.6 0-9.67 5.25-15.55 5.63-6.34 15.42-6.34 6.08 0 9.09 2.56 2.24 1.92 2.24 5.06 0 11.26-19.45 11.26-.26 1.66-.26 3.07 0 2.95 1.31 4.07t3.75 1.12q2.43 0 5.02-1.12 2.59-1.12 3.68-2.92ZM67.9-17.79q4.55 0 7.17-2.82 2.63-2.69 2.63-6.97 0-1.48-.55-2.28-.54-.8-1.63-.8-1.09 0-2.02.42-.92.42-1.88 1.82-2.37 3.2-3.72 10.63Zm25.73-8.96q2.18-3.07 5.47-5.12 3.3-2.05 7.33-2.05t5.95 1.28l12.55-1.28-4.35 24.58Q118.34 3.2 113.6 8.13q-4.54 4.67-13.38 4.67-6.72 0-10.56-2.11-3.84-2.11-3.84-5.63 0-2.63 1.99-4.13 1.98-1.51 5.05-1.51 2.69 0 4.74 1.22 1.22.64 1.79 1.54-1.47 1.28-1.47 3.39 0 2.75 2.56 2.75 4.29 0 6.72-10.11.7-2.75 1.28-5.51-2.88 3.52-9.41 3.52-4.54 0-7.17-2.17-2.62-2.18-2.62-7.3 0-3.2 1.09-6.81 1.09-3.62 3.26-6.69Zm8.32 13.69q0 4.36 2.24 4.36 1.54 0 3.01-1.67 1.15-1.34 1.6-3.33l3.26-16.44q-.32-.07-.64-.2-.64-.25-1.47-.25-3.9 0-6.21 6.4-1.79 4.99-1.79 11.13Zm45.51-4.92q2.3-4.1 2.3-8.26 0-2.75-1.98-2.75-1.54 0-3.14 2.62-1.66 2.63-2.18 6.02L139.14 0l-13.25 1.28 6.53-33.92 10.56-1.28-1.16 6.46q3.14-6.46 10.18-6.46 3.71 0 5.73 1.92 2.01 1.92 2.01 5.86 0 3.93-2.59 6.43-2.59 2.49-7.01 2.49-1.92 0-2.68-.76Zm16.09 16.06q-1.5-1.66-2.17-4.29-.68-2.62-.68-6.91t1.48-8.19q1.47-3.91 4.16-6.72 5.5-5.89 14.59-5.89 3.26 0 5.63 1.09l10.94-1.09-4.73 24.96q-.19.77-.19 2.18 0 1.4.86 2.3.86.9 2.14 1.02-.64 2.18-2.97 3.46-2.34 1.28-4.96 1.28-2.63 0-4.39-.99-1.76-.99-2.27-2.66-1.02 1.6-3.2 2.63-2.17 1.02-5.09 1.02-2.91 0-5.28-.77-2.36-.77-3.87-2.43Zm13.51-25.98q-.74 1.15-1.38 3.1-.64 1.95-1.7 7.17-1.05 5.21-1.05 8.93 0 3.71.57 4.8.58 1.08 1.6 1.08 2.05 0 3.56-1.95 1.5-1.95 2.08-5.41l3.39-18.75q-1.35-1.15-2.91-1.15-1.57 0-2.5.51-.93.51-1.66 1.67Zm69.98 29.18q-7.74 0-7.74-6.02 0-2.62 1.12-7.71t1.5-7.13q.9-4.68.9-6.15 0-3.26-2.44-3.26-1.6 0-3.13 2.21-1.54 2.2-2.24 6.62L231.04 0l-12.48 1.28 3.46-17.41q.57-2.88 1.08-6.14.52-3.27.52-3.78 0-2.94-2.18-2.94-1.47 0-3.07 2.17-1.6 2.18-2.5 6.66L211.97 0l-12.61 1.28 6.72-33.92 10.43-1.28-1.09 6.46q1.67-3.45 4.74-4.96 3.07-1.5 7.87-1.5 2.75 0 4.55 1.34 1.79 1.35 2.36 3.52 1.09-2.24 3.88-3.55 2.78-1.31 6.2-1.31 3.43 0 5.12.74 1.7.73 2.72 1.95 1.73 2.24 1.73 6.33 0 4.04-1.73 12.42-.89 4.1-.89 5.6t.86 2.4q.87.9 2.15 1.02-.64 2.18-2.85 3.46-2.21 1.28-5.09 1.28Z"
        fill="url(#b)"
        transform="translate(121.965 104.76)"
      />
    </g>
  </Svg>
)