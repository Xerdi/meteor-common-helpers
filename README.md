# Meteor Common Helpers

Common Meteor Template helpers.

## Installation

Add the package to your project:

```shell
meteor add xerdi:common-helpers
```

## Usage

All `li` items end up with the class `active` in this example.
```handlebars
<ul>
    <li class="{{eq true true 'active'}}">...</li>
    <li class="{{ne true false 'active'}}">...</li>
    <li class="{{not false 'active'}}">...</li>
    <li class="{{gt 4 3 'active'}}">...</li>
    <li class="{{gte 4 4 'active'}}">...</li>
    <li class="{{lt 3 4 'active'}}">...</li>
    <li class="{{lte 4 4 'active'}}">...</li>
    <li class="{{or false false false 'active'}}">...</li>
</ul>
```
