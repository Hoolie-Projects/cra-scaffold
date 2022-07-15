interface vRule
{
  rule: string,
  entity: any,
  displayFieldText?: string
}

export const validate = (rule: string, entity: any, displayFieldText?: string): string | undefined =>
{

  let isValid = null

  if(!entity) return `The "${displayFieldText || rule}" field is not filled`

  /* === Account === */

  else if(['firstName', 'middleName', 'lastName'].includes(rule))
    isValid = (/^[A-ZА-ЯЁ][a-zа-яё-]{0,23}[a-zа-яё]$/).test(entity)

  else if(rule === 'email')
    isValid = (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}])|(([a-zA-Z\-\d]+\.)+[a-zA-Z]{2,}))$/).test(entity)

  else if(rule === 'socialNickname')
    isValid = (/^@[\w.]+$/).test(entity)

  else if(rule === 'username')
    isValid = (/^\w{5,24}$/).test(entity)

  else if(rule === 'password')
    isValid = (/^.{6,64}$/).test(entity)

  else if(rule.toLowerCase().endsWith('address'))
    isValid = (/^[a-zа-яё\d][a-zа-яё\d\s.\-,]{3,98}[a-zа-яё\d]$/i).test(entity)

  else if(['lawName'].includes(rule))
    isValid = (/^[a-zа-яё\d][a-zа-яё\d\s.\-«"]{3,120}[a-zа-яё"».]$/i).test(entity)

  else if(rule === 'name')
    isValid = entity.length > 0 && entity.length <= 100

  /* === System === */

  else if(rule === 'comment')
    isValid = entity.length > 0 && entity.length < 1000

  else if((/Id$/).test(rule))
    isValid = (/^(?=[a-f\d]{24}$)(\d+[a-f]|[a-f]+\d)/i).test(entity)

  else if(rule === 'searchQuery')
    isValid = (/^[^\s][a-zа-яё\d\s.-]{1,509}[^\s]$/i).test(entity)

  else if(rule === 'dbLimit')
  {
    const dbLimit = +entity
    isValid = !(isNaN(dbLimit) || dbLimit < 1 || dbLimit > 50)
  }

  else if(rule === 'dbOffset')
  {
    const dbOffset = +entity
    isValid = !(isNaN(dbOffset) || dbOffset < 0)
  }

  else if((/^sortBy/).test(rule))
  {
    const sortBy = +entity
    isValid = (sortBy >= -1 && sortBy <= 1)
  }

  else if((/WillAt$/i).test(rule))
  {
    isValid = true

    const date = new Date(entity)
    const now = new Date()

    if((date.toString() === 'Invalid Date'))
    {
      isValid = false
    }
    else if(+now - +date > 0)
    {
      isValid = false
    }

  }

  else if((/DidAt$/i).test(rule))
  {
    isValid = true

    const date = new Date(entity)
    const now = new Date()

    if((date.toString() === 'Invalid Date'))
    {
      isValid = false
    }
    else if(+now - +date < 0)
    {
      isValid = false
    }

  }

  else if((/At$/).test(rule))
  {
    let str = entity

    if((/^\d{2}\.\d{2}.\d{4}$/).test(entity))
      str = entity.split('.').reverse().join('-')

    isValid = (new Date(str).toString() !== 'Invalid Date')
  }

  else if(rule === 'positiveInteger')
    isValid = !(isNaN(+entity) || +entity < 0)

  if(isValid === null)
    return `No validation rule set for this entity: "${entity}"`

  if(isValid === false)
    return `"The "${displayFieldText || rule}" field is incorrect`

}

export const validateMany = (vRules: vRule[]): (string | undefined)[] =>
  vRules.map(({rule, entity, displayFieldText}) =>
    validate(rule, entity, displayFieldText)).filter(field => field)
