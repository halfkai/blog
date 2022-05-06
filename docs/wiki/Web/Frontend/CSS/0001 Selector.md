# Selector

## Type Selector (div)
  type selector can be namespaced (_@namesapce_):
  - matches `<h1>` under namespace ns: `ns|h1`
  - matches all `<h1>`: `*|h1`
  - matches all `<h1>` without any declared namespace: `|h1`
## ID Selector (#id)

## Class Selector (.class)

## Attribute Selector ([attr] | [attr operator value])
  operators
  - exact match: `[attr=value]`
  - include a word (separated by whitespaces) that excatly matched: `[attr~=value]`
  - exact match or the value immediately followed by a hyphen, `-`(U+002D): `[attr|=value]`
  - start with: `[attr^=value]`
  - end with: `[attr$=value]`
  - at least contains one: `[attr*=value]`
